import { View, Text, StyleSheet } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <Text style={styles.month}>October</Text>
      <View style={styles.monthBorder}></View>
    </View>
  )
}

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
      <Calendar />
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
  },
  calendar: {
    flex: 3,
    marginVertical: 20,
    marginHorizontal: "auto",
    width: 350,
    borderRadius: 40,
    borderWidth: 2,
  },
  eventsView: {
    flex: 3,
  },
  upcoming: {
    flex: 1,
    textAlign: "center",
    fontSize: 32,
  },
  month: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    borderTopEndRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  monthBorder: {
    height: 3,
    backgroundColor: "black",
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
  },
  eventDesc: {
    margin: "auto",
    paddingBottom: 10,
    color: "darkgray",
  },
  eventLike: {
    margin: "auto",
  },
  eventSplitter: {
    height: 2,
    backgroundColor: "black",
    width: 50,
    alignSelf: "center",
    margin: 10,
  }
})
