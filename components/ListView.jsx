import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchCalendarEvents } from '../services/GoogleCalendarService';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const ListView = ({ onEventPress }) => {
  const [events, setEvents] = useState([]);
  const [selectedCalendars, setSelectedCalendars] = useState([]);
  const [error, setError] = useState(null);

  const calendarOptions = [
    { key: 'pichealthtest@gmail.com', value: 'Pacific Islander Community' },
    { key: 'f98eb9b3491ce0f74ae3d3dca31849eedcd596b5f7a7cb5a8604f05932d11128@group.calendar.google.com', value: 'Latino Community' }
  ];

  useEffect(() => {
    async function loadEvents() {
      if (selectedCalendars.length === 0) {
        setEvents([]);
        return;
      }

      try {
        const fetchedEvents = await fetchCalendarEvents(selectedCalendars);
        if (!fetchedEvents || !Array.isArray(fetchedEvents)) {
          throw new Error('Invalid events data');
        }
        const formattedEvents = formatEvents(fetchedEvents);
        setEvents(formattedEvents);
      } catch (err) {
        console.error('Error fetching calendar events:', err);
        setError(err.message);
      }
    }
    loadEvents();
  }, [selectedCalendars]);

  const formatEvents = (events) => {
    const groupedEvents = events.reduce((acc, event) => {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      const month = eventDate.toLocaleString('default', { month: 'long', year: 'numeric' });

      if (!acc[month]) {
        acc[month] = [];
      }

      acc[month].push(event);
      return acc;
    }, {});

    const sortedEvents = Object.keys(groupedEvents).map((month) => {
      return {
        title: month,
        data: groupedEvents[month].sort((a, b) => new Date(a.start.dateTime || a.start.date) - new Date(b.start.dateTime || b.start.date)),
      };
    });

    return sortedEvents;
  };

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
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : selectedCalendars.length === 0 ? (
        <Text style={styles.noEventsText}>Please select a calendar to view events</Text>
      ) : events.length > 0 ? (
        <SectionList
          sections={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onEventPress(item)}>
              <View style={styles.eventItem}>
                <Text style={styles.eventTitle}>{item.summary}</Text>
                <Text style={styles.eventTime}>
                  {new Date(item.start.dateTime || item.start.date).toLocaleString()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      ) : (
        <Text style={styles.noEventsText}>No events available</Text>
      )}
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 14,
    color: '#555',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 8,
  },
  noEventsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  dropdown: {
    backgroundColor: '#fff', // White background for the dropdown
  },
  dropdownBox: {
    backgroundColor: '#fff', // White background for the box
    borderColor: '#fff', // Optional: Add border color
    borderRadius:0
  },
});