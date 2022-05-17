module App exposing (main)

import Platform.Cmd as Cmd
import Html
-- import Html.Attributes exposing (value, src, height, enctype, value, type_, multiple)
import Html.Events exposing (onClick)
import Http
import Browser

import Json.Decode as D
-- import Json.Encode as E
import Json.Decode.Extra exposing (andMap)

-- import Html exposing (Attribute)
-- import Html.Attributes exposing (name)

type alias Lead = {
    id   : Int
  , name : String
  }

decodeLeads : D.Decoder (List Lead)
decodeLeads  =
  D.succeed Lead
    |> andMap (D.field "_lid" D.int)
    |> andMap (D.field "_lname" D.string)
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
        Html.thead [] [Html.th [] [Html.text "id"], Html.td [] [Html.text "name"]]
      , Html.tbody [] <| List.map rowView leads]
     ]
     

avitoTable : List Lead -> Html.Html Msg
avitoTable leads =
    Html.table [] [
        Html.thead [] [Html.th [] [Html.text "id"], Html.td [] [Html.text "name"]]
      , Html.tbody [] <| List.map rowView leads
      ]

rowView : Lead -> Html.Html Msg
rowView lead = Html.tr [] [Html.td [] [Html.text (String.fromInt lead.id)], Html.td [] [Html.text lead.name]]

viewHttpStatus : HttpStatus -> List (Html.Html Msg)
viewHttpStatus status = 
  case status of 
    Success -> [Html.text "Норм", refreshButton]
    Loading s -> [Html.text s]
    Failure s -> [Html.text s, refreshButton]

refreshButton : Html.Html Msg
refreshButton = Html.button [onClick RefreshLeads] [Html.text "Обновить"]    

