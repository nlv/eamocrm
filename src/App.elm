module App exposing (main)

import Platform.Cmd as Cmd
import Html
import Html.Attributes exposing (href)
import Html.Events exposing (onClick)
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

import Maybe exposing (withDefault, map)
import Html exposing (Attribute)
import Html.Attributes as Html

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

  | RefreshLeads
  

type HttpStatus = Failure String | Loading String | Success

type alias Model = {
    httpStatus : HttpStatus 

  , leads : Maybe (List Lead)
  }

initModel : Model
initModel = 
  {
    httpStatus = Loading "Получаем данные"
  , leads = Nothing
  }

getLeads : Cmd Msg
getLeads = Http.get
      { url = "api/leads"
      , expect = Http.expectJson GotLeads decodeLeads
      }


update : Msg -> Model -> (Model, Cmd Msg)
update action model =

  case action of

    GotLeads result ->
      case result of
         Ok leads -> ({model | leads = Just leads, httpStatus = Success}, Cmd.none)
         Err err -> ({model | httpStatus = Failure "Ошибка запроса заявок"}, Cmd.none)

    RefreshLeads -> ({ model | httpStatus = Loading "Получаем данные"}, getLeads)




main : Program () Model Msg
main =  Browser.element { init = \_ -> (initModel, getLeads), update = update, view = view, subscriptions = \_ -> Sub.none}

view : Model -> Html.Html Msg
view model = 
    E.layout [] <| E.column [] <| [viewHttpStatus model.httpStatus, viewLeads model]
 
viewLeads : Model -> E.Element Msg
viewLeads model = 
  case model.leads of
     Nothing -> E.el [E.padding 10] <| E.text "Грузится"
     Just leads -> E.el [E.padding 10] <| tableView leads

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

tableView : List Lead -> E.Element Msg
tableView leads =
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
      , view = \l -> E.el (EBg.color (statusColor l.statusId) :: dataCellStyle) <| E.text (String.fromInt l.statusId)
      }
    ]
  }




     
rowView : Lead -> Html.Html Msg
rowView lead = Html.tr [] [
    Html.td [] [Html.text (String.fromInt lead.id)]
  , Html.td [] [Html.a [href lead.href] [Html.text lead.href]]
  , Html.td [] [Html.text <| withDefault "" <| Maybe.map (format config "%d.%m.%Y %I:%M:%S" utc) <| lead.dateVisit]
  , Html.td [] [Html.text lead.address]
  , Html.td [] [Html.text lead.ltype]
  , Html.td [] [Html.text (String.fromFloat lead.sellCost)]
  , Html.td [] [Html.text (String.fromFloat lead.partsCost)]
  , Html.td [] [Html.text (String.fromFloat lead.worksCost)]
  , Html.td [] [Html.text (String.fromFloat lead.officeIncome)]
  , Html.td [] [Html.text <| withDefault "" <| Maybe.map (format config "%d.%m.%Y %I:%M:%S" utc) <| lead.closedDate]
  , Html.td [] [Html.text (String.fromInt lead.statusId)]
  ]

buttonBorder : List (E.Attribute Msg)
buttonBorder = [EB.solid, EB.width 1]

viewHttpStatus : HttpStatus -> E.Element Msg
viewHttpStatus status = 
  case status of 
    Success -> E.wrappedRow [] [E.el [E.padding 10] <| E.text "Норм", E.el (E.padding 5 :: buttonBorder) refreshButton]
    Loading s -> E.wrappedRow [] [E.el [E.padding 10] <| E.text s]
    Failure s -> E.wrappedRow [] [E.el [E.padding 10] <| E.text s, E.el (E.padding 5 :: buttonBorder) refreshButton]

refreshButton : E.Element Msg
refreshButton = EI.button [] {onPress = Just RefreshLeads, label = E.text "Обновить"}    

