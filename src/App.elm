module App exposing (main)

import Platform.Cmd as Cmd
import Html
import Html.Attributes exposing (href)
import Html.Events exposing (onClick)
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
    Html.div [] <| viewHttpStatus model.httpStatus ++ viewLeads model 
 
viewLeads : Model -> List (Html.Html Msg)
viewLeads model = 
  case model.leads of
     Nothing -> [Html.div [] [Html.text "Грузится..."]]
     Just leads -> [tableView leads]

tableView : List Lead -> Html.Html Msg
tableView leads =
  Html.div [] 
  <| [Html.table [] [
        Html.thead [] [
            Html.th [] [Html.text "Номер заявки"]
          , Html.th [] [Html.text "Ссылка на заявку"]
          , Html.th [] [Html.text "Дата выезда"]
          , Html.th [] [Html.text "Адрес заявки"]
          , Html.th [] [Html.text "Тип заявки"]
          , Html.th [] [Html.text "Цена клиенту"]
          , Html.th [] [Html.text "Затраты на матерал"]
          , Html.th [] [Html.text "Стоимость работ для клиента"]
          , Html.th [] [Html.text "Перевод в офис"]
          , Html.th [] [Html.text "Дата закрытия"]
          , Html.th [] [Html.text "Статус заявки"]
        ]
      , Html.tbody [] <| List.map rowView leads]
     ]
     
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

viewHttpStatus : HttpStatus -> List (Html.Html Msg)
viewHttpStatus status = 
  case status of 
    Success -> [Html.text "Норм", refreshButton]
    Loading s -> [Html.text s]
    Failure s -> [Html.text s, refreshButton]

refreshButton : Html.Html Msg
refreshButton = Html.button [onClick RefreshLeads] [Html.text "Обновить"]    

