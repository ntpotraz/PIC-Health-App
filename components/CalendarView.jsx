import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { fetchCalendarEvents } from './GoogleCalendarService';
import { Agenda } from 'react-native-calendars';

const CalendarView = ({ onEventPress }) => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    async function loadEvents() {
      const fetchedEvents = await fetchCalendarEvents();

      const formattedEvents = fetchedEvents.reduce((acc, event) => {
        const date = (event.start.dateTime || event.start.date).split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push({ name: event.summary, time: new Date(event.start.dateTime).toLocaleTimeString(), ...event });
        return acc;
      }, {});
      
      setEvents(formattedEvents);
    }
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => onEventPress(item)}>
            <View style={styles.eventItem}>
              <Text>{item.name}</Text>
              <Text>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderEmptyDate={() => <Text>No events for today</Text>}
      />
      
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
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2, // Half of the screen height
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency
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
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
  },
});
