import { View, Text, StyleSheet } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <Text style={styles.month}>October</Text>
    </View>
  )
}

const UpcomingEvent = () => {
  return (
    <View style={styles.upcomingEvent}>
      <View>
        <Text>Title</Text>
        <Text>Desc</Text>
      </View>
      <View>
        <Text>L M N</Text>
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
        <UpcomingEvent />
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
    marginHorizontal: 40,
    borderRadius: 40,
    borderWidth: 2,
  },
  eventsView: {
    flex: 2,
  },
  upcoming: {
    textAlign: "center",
    fontSize: 32,
    gap: 20,
  },
  month: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    borderBottomWidth: 10,
    borderTopEndRadius: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  upcomingEvent: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 40,
  }
})
