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

import Dict

type alias Status = {
    id   : Int
  , name : String
  }

type alias Filter = {
  user : Maybe String
  }

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
  , responsible  : Int -- Ответственный
  , address      : String -- Адрес
  , dateVisit    : Maybe Posix -- Дата выезда
  , ltype        : String
  , sellCost     : Float -- Цена клиенту
  , partsCost    : Float -- Стоимость материалов, Затраты на материал, Затрачено
  , worksCost    : Float -- Стоимость работ для клиента
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
    |> andMap (D.field "_laddress" D.string)
    |> andMap (D.maybe (D.field "_ldateVisit" decoder))
    |> andMap (D.field "_ltype" D.string)
    |> andMap (D.field "_lsellCost" D.float)
    |> andMap (D.field "_lpartsCost" D.float)
    |> andMap (D.field "_lworksCost" D.float)
    |> andMap (D.field "_lofficeIncome" D.float)
    |> andMap (D.maybe (D.field "_lclosedDate" decoder))
    |> andMap (D.field "_lstatusId" D.int)
    |> D.list


type Msg = 
    
    GotLeads (Result Http.Error (List Lead)) 

  | GotStatuses (Result Http.Error (List Status)) 

  | GotUsers (Result Http.Error (List User))   

  | UserSelected String

  | RefreshLeads
  

type HttpStatus = LastFailure String | Loading String | Success

type alias Model = {
    httpStatus : HttpStatus 

  , filter : Filter  

  , leads : Maybe (List Lead)
  , statuses : Maybe (Dict.Dict String Status)
  , users : Maybe (Dict.Dict String User)
  }

initModel : Model
initModel = 
  {
    httpStatus = Success
  , filter = {user = Nothing}
  , leads = Nothing
  , statuses = Nothing
  , users = Nothing
  }

getLeads : String -> Cmd Msg
getLeads user = Http.get
      { url = "api/leads/?user=" ++ user
      , expect = Http.expectJson GotLeads decodeLeads
      }

getStatuses : Cmd Msg
getStatuses = Http.get
      { url = "api/pipelines/statuses"
      , expect = Http.expectJson GotStatuses decodeStatuses
      }      

getUsers : Cmd Msg
getUsers = Http.get
      { url = "api/users"
      , expect = Http.expectJson GotUsers decodeUsers
      }      

update : Msg -> Model -> (Model, Cmd Msg)
update action model =

-- !! объединить по типам statuses и users {id : Int, name : String}
  let indexedStatuses statuses = List.map (\s -> (String.fromInt s.id, s)) statuses
      indexedUsers users = List.map (\s -> (String.fromInt s.id, s)) users
  in
  case action of

    GotLeads result ->
      case result of
         Ok leads -> ({model | leads = Just leads, httpStatus = Success}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса заявок"}, Cmd.none)

    GotStatuses result ->
      case result of
         Ok statuses -> ({model | statuses = Just (indexedStatuses statuses |> Dict.fromList), httpStatus = Success}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса статусов"}, Cmd.none)

    GotUsers result ->
      case result of
         Ok users -> ({model | users = Just (indexedUsers users |> Dict.fromList), httpStatus = Success}, Cmd.none)
         Err _ -> ({model | httpStatus = LastFailure "Ошибка запроса пользователей"}, Cmd.none)

    RefreshLeads -> 
      case model.filter.user of
          Just user -> ({ model | httpStatus = Loading "Получаем данные"}, getLeads user)
          Nothing -> ({model | httpStatus = LastFailure "Укажите пользователя"}, Cmd.none)

    UserSelected user -> ({ model | filter = { user = Just user}, leads = Nothing, httpStatus = Loading "Загружаем заявки..."}, getLeads user)

main : Program () Model Msg
main =  Browser.element { init = \_ -> (initModel, Cmd.batch [getUsers, getStatuses]), update = update, view = view, subscriptions = \_ -> Sub.none}

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
  case model.users of
      Just users -> 
        let
          options = List.map (\(_, u) -> EI.option (String.fromInt u.id) (E.text u.name)) (Dict.toList users)
          selected =
            case model.filter.user of
                Just user -> (Maybe.map (\u -> String.fromInt u.id) (Dict.get user users) |> Maybe.withDefault user) |> Just
                Nothing -> Nothing
          in
          E.wrappedRow [] [
              E.el [E.padding 10] <| EI.radio [] {onChange = UserSelected, options = options, selected = selected, label = EI.labelAbove [] <| E.text "Укажите пользователя"}
            ]   

      Nothing -> E.wrappedRow [] []


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
            header = E.el headerCellStyle <| E.text "Адрес заявки"
          , width = E.fill |> E.maximum 200
          , view = \l -> E.paragraph (EBg.color (statusColor l.statusId) :: dataCellStyle ++ [E.width <| E.maximum 500 E.fill]) <| [E.text l.address]
      
               -- E.el (dataCellStyle ++ [E.width <| E.maximum 200 E.fill, E.clip]) <| E.text l.address
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
