import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { fetchCalendarEvents } from '../services/GoogleCalendarService';
import { Calendar } from 'react-native-calendars';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const CalendarView = ({ onEventPress }) => {
  const [events, setEvents] = useState({});
  const [selectedCalendars, setSelectedCalendars] = useState([]);

  const calendarOptions = [
    { key: 'pichealthtest@gmail.com', value: 'Pacific Islander Community' },
    { key: 'f98eb9b3491ce0f74ae3d3dca31849eedcd596b5f7a7cb5a8604f05932d11128@group.calendar.google.com', value: 'Latino Community' }
  ];

  useEffect(() => {
    async function loadEvents() {
      if (selectedCalendars.length === 0) {
        setEvents({});
        return;
      }

      const fetchedEvents = await fetchCalendarEvents(selectedCalendars);

      const formattedEvents = fetchedEvents.reduce((acc, event) => {
        const date = (event.start.dateTime || event.start.date).split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push({ name: event.summary, time: new Date(event.start.dateTime).toLocaleTimeString(), ...event });
        return acc;
      }, {});
      
      setEvents(formattedEvents);
    }
    loadEvents();
  }, [selectedCalendars]);

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <MultipleSelectList 
        setSelected={setSelectedCalendars} 
        data={calendarOptions} 
        save="key"
        label="Select Calendars"
        placeholder="Select Calendar"
        dropdownStyles={styles.dropdown} // Apply custom styles to the dropdown
        boxStyles={styles.dropdownBox} // Apply custom styles to the box
      />
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
});