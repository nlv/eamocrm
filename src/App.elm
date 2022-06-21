module App exposing (main)

import Platform.Cmd as Cmd
import Html
import Element as E
import Element.Input as EI
import Element.Border as EB
import Element.Background as EBg
import Element.Font as EF
import Http
import Browser

import Json.Decode as D
import Json.Decode.Extra exposing (andMap)

import Time exposing (Posix, utc)
import Iso8601 exposing (decoder)
import Time.Format exposing (format)
import Time.Format.Config.Config_ru_ru exposing (config)

import Maybe exposing (withDefault)
import Html.Attributes as Html
import Html.Events as Html

import Dict

type alias Status = {
    id   : Int
  , name : String
  }

type alias Pipeline = {
    id   : Int
  , name : String
  , statuses : List Status
  }  

type alias Filter = {
    user     : Maybe String
  , pipeline : Maybe String
  , status   : Maybe String
  }

decodePipelines : D.Decoder (List Pipeline)
decodePipelines  =
  D.succeed Pipeline
    |> andMap (D.field "_pid" D.int)
    |> andMap (D.field "_pname" D.string)
    |> andMap (D.field "_pstatuses" decodeStatuses)
    |> D.list  

decodeStatuses : D.Decoder (List Status)
decodeStatuses  =
  D.succeed Status
    |> andMap (D.field "_sid" D.int)
    |> andMap (D.field "_sname" D.string)
    |> D.list  

type alias User = {
    id   : Int
  , name : String
  }

decodeUsers : D.Decoder (List User)
decodeUsers  =
  D.succeed Status
    |> andMap (D.field "_uid" D.int)
    |> andMap (D.field "_uname" D.string)
    |> D.list      

type alias Lead = {
    id           : Int
  , name         : String
  , href         : String -- Ссылка на заявку
  , responsible  : Int -- Ответственный (менеджер)
  , master       : Maybe Int -- Мастер (исполнитель)
  , masterSalary : Float -- зп мастера
  , address      : String -- Адрес
  , city         : String -- Город
  , dateVisit    : Maybe Posix -- Дата выезда
  , ltype        : String
  , sellCost     : Float -- Цена клиенту
  , partsCost    : Float -- Стоимость материалов, Затраты на материал, Затрачено
  , worksCost    : Float -- Стоимость работ для клиента
  , netWorksCost : Float -- Стоимость работ
  , officeIncome : Float -- Перевод в офис, Заработал Офис
  , closedDate   : Maybe Posix -- Дата закрытия
  , statusId     : Int
  }

decodeLeads : D.Decoder (List Lead)
decodeLeads  =
  D.succeed Lead
    |> andMap (D.field "_lid" D.int)
    |> andMap (D.field "_lname" D.string)
    |> andMap (D.field "_href" D.string)
    |> andMap (D.field "_lresponsible" D.int)
    |> andMap (D.maybe <| D.field "_lmaster" D.int)
    |> andMap (D.field "_lmasterSalary" D.float)
    |> andMap (D.field "_laddress" D.string)
    |> andMap (D.field "_lcity" D.string)
    |> andMap (D.maybe (D.field "_ldateVisit" decoder))
    |> andMap (D.field "_ltype" D.string)
    |> andMap (D.field "_lsellCost" D.float)
    |> andMap (D.field "_lpartsCost" D.float)
    |> andMap (D.field "_lworksCost" D.float)
    |> andMap (D.field "_lnetWorksCost" D.float)
    |> andMap (D.field "_lofficeIncome" D.float)
    |> andMap (D.maybe (D.field "_lclosedDate" decoder))
    |> andMap (D.field "_lstatusId" D.int)
    |> D.list


type Msg = 
    
    GotLeads (Result Http.Error (List Lead)) 

  | GotPipelines (Result Http.Error (List Pipeline)) 

  | GotUsers (Result Http.Error (List User))   

  | UserSelected String
  | StatusSelected String

  | RefreshLeads
  

type HttpStatus = LastFailure String | Loading String | Success

type alias Model = {
    httpStatus : HttpStatus 

  , filter : Filter  
  , pipelines : Maybe (Dict.Dict String Pipeline)  
  , users : Maybe (Dict.Dict String User)
  , statuses : Maybe (Dict.Dict String Status)  

  , leads : Maybe (List Lead)
  }

initModel : Model
initModel = 
  {
    httpStatus = Success

  , filter = {user = Nothing, pipeline = Nothing, status = Nothing}
  , pipelines = Nothing
  , statuses = Nothing
  , users = Nothing

  , leads = Nothing

  }

getLeads : String -> Maybe String -> Cmd Msg
getLeads user status = 
    let status2 = Maybe.map (\s -> "&status=" ++ s) status |> Maybe.withDefault ""
    in
    Http.get
      { url = "api/leads/?user=" ++ user ++ status2
      , expect = Http.expectJson GotLeads decodeLeads
      }

getPipelines : Cmd Msg
getPipelines = Http.get
      { url = "api/pipelines"
      , expect = Http.expectJson GotPipelines decodePipelines
      }      

getUsers : Cmd Msg
getUsers = Http.get
      { url = "api/users"
      , expect = Http.expectJson GotUsers decodeUsers
      }      

pipeline_id : Int
pipeline_id = 5023048

update : Msg -> Model -> (Model, Cmd Msg)
update action model =

-- !! объединить по типам statuses и users {id : Int, name : String}
  let indexedPipelines pipelines = List.map (\p -> (String.fromInt p.id, p)) pipelines
      indexedStatuses statuses = List.map (\s -> (String.fromInt s.id, s)) statuses
      indexedUsers users = List.map (\s -> (String.fromInt s.id, s)) users
  in
  case action of

    GotLeads result ->
      case result of
         Ok leads -> ({model | leads = Just leads, httpStatus = Success}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса заявок"}, Cmd.none)

    GotPipelines result ->
      case result of
         Ok pipelines -> 
              let fixedPipeline = List.filter (\p -> p.id == pipeline_id) pipelines |> List.head
                  mfilter = model.filter
              in
              case fixedPipeline of
                  Just pipeline ->
                    ({model | 
                          pipelines = Just (indexedPipelines pipelines |> Dict.fromList)
                        , statuses = Just (indexedStatuses pipeline.statuses |> Dict.fromList)
                        , filter = { mfilter | pipeline = Just (String.fromInt pipeline.id), status = Nothing }
                        , httpStatus = Success}, Cmd.none)
                  Nothing ->  ({model | httpStatus = LastFailure ("Ошибка запроса воронок: воронка " ++ (String.fromInt pipeline_id) ++ " не найдена")}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса статусов"}, Cmd.none)

    GotUsers result ->
      case result of
         Ok users -> ({model | users = Just (indexedUsers users |> Dict.fromList), httpStatus = Success}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса пользователей"}, Cmd.none)

    RefreshLeads -> 
      case model.filter.user of
          Just user -> ({ model | httpStatus = Loading "Получаем данные"}, getLeads user (model.filter.status))
          Nothing -> ({model | httpStatus = LastFailure "Укажите пользователя"}, Cmd.none)

    UserSelected user -> 
      let mfilter = model.filter
      in
      ({ model | filter = { mfilter | user = Just user}, leads = Nothing, httpStatus = Loading "Загружаем заявки..."}, getLeads user (model.filter.status))

    StatusSelected status -> 
      let mfilter = model.filter
          status0 = if status == "" then Nothing else Just status
          cmd = 
            case model.filter.user of
                Just user -> getLeads user status0
                _         -> Cmd.none
      in
      ({ model | filter = { mfilter | status = status0}, leads = Nothing, httpStatus = Loading "Загружаем заявки..."}, cmd)      

main : Program () Model Msg
main =  Browser.element { init = \_ -> (initModel, Cmd.batch [getUsers, getPipelines]), update = update, view = view, subscriptions = \_ -> Sub.none}

view : Model -> Html.Html Msg
view model = 
    E.layout [] <| E.column [] <| [viewHttpStatus model.httpStatus, viewModelStatus model, viewFilters model, viewLeads model]
 
headerCellStyle : List (E.Attribute Msg)
headerCellStyle = [EB.solid, EB.width 1, EF.bold, E.padding 5]

dataCellStyle : List (E.Attribute Msg)
dataCellStyle = [EB.width 1, E.padding 5, E.height E.fill]

statusColor : Int -> E.Color
statusColor status = 
  case status of
    143 -> E.rgb255 255 0 0
    45242701 {-142-} -> E.rgb255 0 255 0
    _   -> E.rgb255 255 255 255

viewFilters : Model -> E.Element Msg
viewFilters model = 
  let
    usersFilter = 
      case model.users of
        Just users -> 
          let
            selected user = 
              case model.filter.user of
                  Just userF -> Html.selected (user == userF)
                  _            -> Html.selected (user == "")
            options = List.map (\(_, u) -> Html.option [selected (String.fromInt u.id), Html.value (String.fromInt u.id)] [Html.text u.name]) (Dict.toList users)
            in
                E.el [E.padding 10] <| E.html (Html.select [Html.onInput UserSelected, Html.style "font-size" "1.5rem", Html.style "height" "1.8rem"] options)

        Nothing -> E.el [E.padding 10] (E.text "Фильтр пользователей не доступен")

    statusesFilter = 
      case model.statuses of
        Just statuses -> 
          let
            selected status = 
              case model.filter.status of
                  Just statusF -> Html.selected (status == statusF)
                  _            -> Html.selected (status == "")
            options0 = List.map (\(_, u) -> Html.option [selected (String.fromInt u.id), Html.value (String.fromInt u.id)] [Html.text u.name]) (Dict.toList statuses)
            options = Html.option [selected "", Html.value ""] [Html.text ""] :: options0
            in
                E.el [E.padding 10] <| E.html (Html.select [Html.onInput StatusSelected, Html.style "font-size" "1.5rem", Html.style "height" "1.8rem"] options)

        Nothing -> E.el [E.padding 10] (E.text "Фильтр статусов не доступен")        
  in
    E.wrappedRow [] [usersFilter, statusesFilter]


viewLeads : Model -> E.Element Msg
viewLeads model = 
  case model.leads of
    Just leads ->
      E.table [] {
        data = leads
      , columns =  [
          {
            header = E.el headerCellStyle <| E.text "Номер заявки"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromInt l.id)
          }
        , {
            header = E.el headerCellStyle <| E.text "Ссылка на заявку"
          , width = E.fill
          , view = \l -> E.link (EBg.color (statusColor l.statusId) :: EF.underline :: EF.color (E.rgb 0 0 1) :: dataCellStyle) { url = l.href, label = E.text "..."}
          }
        , {
            header = E.el headerCellStyle <| E.text "Дата выезда"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (withDefault "" <| Maybe.map (format config "%d.%m.%Y %I:%M:%S" utc) <| l.dateVisit)
          }
        , {
            header = E.el headerCellStyle <| E.text "Мастер"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (Maybe.map String.fromInt l.master |> Maybe.withDefault "")
          }          
        , {
            header = E.el headerCellStyle <| E.text "ЗП мастера"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.masterSalary)
          }
        , {
            header = E.el headerCellStyle <| E.text "Адрес заявки"
          , width = E.fill |> E.maximum 200
          , view = \l -> E.paragraph (EBg.color (statusColor l.statusId) :: dataCellStyle ++ [E.width <| E.maximum 500 E.fill]) <| [E.text l.address]
      
               -- E.el (dataCellStyle ++ [E.width <| E.maximum 200 E.fill, E.clip]) <| E.text l.address
          }
        , {
            header = E.el headerCellStyle <| E.text "Город"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text l.city
          }          
        , {
            header = E.el headerCellStyle <| E.text "Тип заявки"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text l.ltype
          }
        , {
            header = E.el headerCellStyle <| E.text "Цена клиенту"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.sellCost)
          }
        , {
            header = E.el headerCellStyle <| E.text "Затраты на матерал"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.partsCost)
          }
        , {
            header = E.el headerCellStyle <| E.text "Стоимость работ для клиента"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.worksCost)
          }
        , {
            header = E.el headerCellStyle <| E.text "Стоимость работ"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.netWorksCost)
          }          
        , {
            header = E.el headerCellStyle <| E.text "Перевод в офис"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromFloat l.officeIncome)
          }
        , {
            header = E.el headerCellStyle <| E.text "Дата закрытия"
          , width = E.fill
          , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (withDefault "" <| Maybe.map (format config "%d.%m.%Y %I:%M:%S" utc) <| l.closedDate)
          }
        , {
            header = E.el headerCellStyle <| E.text "Статус заявки"
          , width = E.fill
          , view = 
              \l -> 
                let statusId = String.fromInt l.statusId
                    status = 
                      case model.statuses of
                        Just statuses -> Dict.get statusId statuses |> Maybe.map (.name) |> Maybe.withDefault statusId
                        Nothing -> String.fromInt l.statusId
                in 
                E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text status
          }
        ]
      }
    Nothing -> E.el [E.padding 10] <| E.text ""


buttonBorder : List (E.Attribute Msg)
buttonBorder = [EB.solid, EB.width 1]

viewHttpStatus : HttpStatus -> E.Element Msg
viewHttpStatus status = 
  case status of 
    Success -> E.wrappedRow [] [E.el [E.padding 10] <| E.text "Норм", E.el (E.padding 5 :: buttonBorder) refreshButton]
    Loading s -> E.wrappedRow [] [E.el [E.padding 10] <| E.text s]
    LastFailure s -> E.wrappedRow [] [E.el [E.padding 10] <| E.text s, E.el (E.padding 5 :: buttonBorder) refreshButton]

refreshButton : E.Element Msg
refreshButton = EI.button [] {onPress = Just RefreshLeads, label = E.text "Обновить"}    

viewModelStatus : Model -> E.Element Msg
viewModelStatus model = 
  let leadsStatus = 
        case model.leads of
            Just _ -> "Список сделок обновлен"
            Nothing -> "Список сделок не обновлен"
      statusesStatus = 
        case model.statuses of
            Just _ -> "Список статусов обновлен"
            Nothing -> "Список статусов не обновлен"            
      usersStatus = 
        case model.users of
            Just _ -> "Список пользователей обновлен"
            Nothing -> "Список пользователей не обновлен"   
  in E.wrappedRow [] [E.el [E.padding 10] <| E.text leadsStatus, E.el [E.padding 10] <| E.text statusesStatus, E.el [E.padding 10] <| E.text usersStatus]
