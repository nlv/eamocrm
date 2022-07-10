module Extra.I18n exposing (Language(..), getI18n, rangeTimePickerI18n, timePickerI18n)

import DatePicker.I18n exposing (I18n, TextMode(..))
import Time exposing (Month(..), Weekday(..))


type Language
    = English
    | Greek
    | Russian


getGreekMonth : Month -> String
getGreekMonth month =
    case month of
        Jan ->
            "Ιανουάριος"

        Feb ->
            "Φεβρουάριος"

        Mar ->
            "Μάρτιος"

        Apr ->
            "Απρίλιος"

        May ->
            "Μάϊος"

        Jun ->
            "Ιούνιος"

        Jul ->
            "Ιούλιος"

        Aug ->
            "Αύγουστος"

        Sep ->
            "Σεπτέμβριος"

        Oct ->
            "Οκτώβριος"

        Nov ->
            "Νοέμβριος"

        Dec ->
            "Δεκέμβριος"


getEnglishMonth : Month -> String
getEnglishMonth month =
    case month of
        Jan ->
            "January"

        Feb ->
            "February"

        Mar ->
            "March"

        Apr ->
            "April"

        May ->
            "May"

        Jun ->
            "June"

        Jul ->
            "July"

        Aug ->
            "August"

        Sep ->
            "September"

        Oct ->
            "October"

        Nov ->
            "November"

        Dec ->
            "December"

getRussianMonth : Month -> String
getRussianMonth month =
    case month of
        Jan ->
            "Январь"

        Feb ->
            "Февраль"

        Mar ->
            "Март"

        Apr ->
            "Апрель"

        May ->
            "Май"

        Jun ->
            "Июнь"

        Jul ->
            "Июль"

        Aug ->
            "Август"

        Sep ->
            "Сентябрь"

        Oct ->
            "Октябрь"

        Nov ->
            "Ноябрь"

        Dec ->
            "Декабрь"            


monthToString : Language -> TextMode -> Month -> String
monthToString language textMode month =
    let
        monthString =
            case language of
                Greek ->
                    getGreekMonth month

                English ->
                    getEnglishMonth month

                Russian ->
                    getRussianMonth month
    in
    case textMode of
        Condensed ->
            String.left 3 monthString

        Full ->
            monthString


getGreekWeekday : Weekday -> String
getGreekWeekday weekday =
    case weekday of
        Mon ->
            "Δευτέρα"

        Tue ->
            "Τρίτη"

        Wed ->
            "Τετάρτη"

        Thu ->
            "Πέμπτη"

        Fri ->
            "Παρασκευή"

        Sat ->
            "Σάββατο"

        Sun ->
            "Κυριακή"


getEnglishWeekday : Weekday -> String
getEnglishWeekday weekday =
    case weekday of
        Mon ->
            "Monday"

        Tue ->
            "Tuesday"

        Wed ->
            "Wednesday"

        Thu ->
            "Thursday"

        Fri ->
            "Friday"

        Sat ->
            "Saturday"

        Sun ->
            "Sunday"

getRussianWeekday : Weekday -> String
getRussianWeekday weekday =
    case weekday of
        Mon ->
            "Понедельник"

        Tue ->
            "Вторник"

        Wed ->
            "Среда"

        Thu ->
            "Четверг"

        Fri ->
            "Пятница"

        Sat ->
            "Суббота"

        Sun ->
            "Воскресенье"            


weekdayToString : Language -> TextMode -> Weekday -> String
weekdayToString language textMode weekday =
    let
        weekdayString =
            case language of
                Greek ->
                    getGreekWeekday weekday

                English ->
                    getEnglishWeekday weekday

                Russian ->
                    getRussianWeekday weekday
    in
    case textMode of
        Condensed ->
            String.left 3 weekdayString

        Full ->
            weekdayString


getI18n : Language -> I18n
getI18n language =
    case language of
        English ->
            { monthToString = monthToString English
            , weekdayToString = weekdayToString English
            , todayButtonText = "Today"
            }

        Russian ->
            { monthToString = monthToString Russian
            , weekdayToString = weekdayToString Russian
            , todayButtonText = "Сегодня"
            }

        Greek ->
            { monthToString = monthToString Greek
            , weekdayToString = weekdayToString Greek
            , todayButtonText = "Σήμερα"
            }



-- Time Picker I18n helpers


timePickerI18n : Language -> String
timePickerI18n language =
    case language of
        English ->
            "Select time"

        Russian ->
            "Укажите время"            

        Greek ->
            "Επιλέξτε ώρα"


rangeTimePickerI18n : Language -> { start : String, end : String, checkboxText : String }
rangeTimePickerI18n language =
    case language of
        English ->
            { start = "Arrival time"
            , end = "Departure time"
            , checkboxText = "Same as arrival time"
            }

        Russian ->
            { start = "Время начала"
            , end = "Время окончания"
            , checkboxText = "Совпадает с временем начала"
            }            

        Greek ->
            { start = "Ώρα άφιξης"
            , end = "Ώρα αναχώρησης"
            , checkboxText = "Ίδια με την ώρα άφιξης"
            }