import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const UpcomingEvent = ({ title, desc, date }) => {
  return (
    <View style={styles.upcomingEvent}>
      <View>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDesc}>{desc}</Text>
      </View>
      <View>
        <Text style={styles.eventDate}>{date}</Text>
      </View>
    </View>
  )
}


const CalendarView = ({ onEventPress, events, eventsArray, selectedCalendars }) => {

console.log(eventsArray)

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {selectedCalendars.length === 0 ? (
        <Text style={styles.noEventsText}>Please select a calendar to view events</Text>
      ) : (
        <Calendar
          markedDates={markedDates}
          onDayPress={(day) => {
            const selectedDateEvents = events[day.dateString] || [];
            selectedDateEvents.forEach(event => onEventPress(event));
          }}
        />
      )}
      
      {/* Button Section */}
      <View style={styles.middleBtns}>
        <TouchableOpacity>
          <View style={styles.wellnessSOS}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Wellness Check</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wellnessSOS}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Upcoming Events</Text>
        <UpcomingEvent 
          title={eventsArray} 
          desc={"Desc"} 
          date={"time"} 
        />
      </View>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    //height: Dimensions.get('window').height / 2, // Half of the screen height
    //backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency
  },
  eventItem: {
    padding: 10,
  },
  middleBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20, // Add space between calendar and buttons
  },
  wellnessSOS: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fff', // White background for the dropdown
  },
  dropdownBox: {
    backgroundColor: '#fff', // White background for the box
    borderColor: '#fff', // Optional: Add border color
    borderRadius:0
  },
  noEventsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
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
  eventDate: {
    margin: "auto",
    color: "white"
  },
});
