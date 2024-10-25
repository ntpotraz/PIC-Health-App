import { View, Text, StyleSheet, Alert } from "react-native";
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';

/*
const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <Text style={styles.month}>October</Text>
      <View style={styles.monthBorder}></View>
    </View>
  )
}
*/
import { View, Text, StyleSheet, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const UpcomingEvent = () => {
  return (
    <View style={styles.upcomingEvent}>
      <View>
        <Text style={styles.eventTitle}>Title</Text>
        <Text style={styles.eventDesc}>A brief description of the event</Text>
      </View>
      <View>
        <Text style={styles.eventLike}>L M N</Text>
      </View>
    </View>
  )
}

const CalendarView = () => {
  return (
    <View style={styles.container}>

      {/* React Native Calendar Component */}
      <Calendar
        style={styles.RNCalendar}
        // Callback called when user presses a day
        onDayPress={day => {
          console.log('selected day:', day);
        }}
        /* Marking specific Dates 
        * (there's a way to not harcode this but my brain is too smooth)
        */
        markedDates={{
          '2024-10-31': { marked: true, selected: true, selectedColor: 'orange' },
          '2024-10-19': { marked: true, dotColor: 'red' }
        }}
        theme={{
          calendarBackground: "rgba(255, 255, 255, 0)",
          dayTextColor: "black",
          monthTextColor: "black",
          textSectionTitleColor: "hsl(200, 50%, 40%)",
        }}
      />
      <View style={styles.middleBtns}>
        <TouchableOpacity>
          <View style={styles.wellnessSOS}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Wellness Check</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wellnessSOS}>
            <Text style={{fontSize:20, fontWeight: "bold"}}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.eventsView}>
        <Text style={styles.upcoming}>Upcoming Events</Text>
        <UpcomingEvent />
        <View style={styles.eventSplitter}></View>
        <UpcomingEvent />
        <View style={styles.eventSplitter}></View>
        <UpcomingEvent />
      </View>
    </View>
  )
}

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "rgba(0,0,0,0.4)",
  },
  RNCalendar: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  eventsView: {
    flex: 3,
  },
  upcoming: {
    flex: 1,
    textAlign: "center",
    fontSize: 32,
    color: "white",
  },
  month: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    borderTopEndRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
  },
  monthBorder: {
    height: 3,
    backgroundColor: "white",
  },
  upcomingEvent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 10,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  eventDesc: {
    margin: "auto",
    paddingBottom: 10,
    color: "#DDD",
  },
  eventLike: {
    margin: "auto",
    color: "white"
  },
  eventSplitter: {
    height: 2,
    backgroundColor: "white",
    width: 50,
    alignSelf: "center",
    margin: 10,
  },
  middleBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wellnessSOS: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
  }
})
