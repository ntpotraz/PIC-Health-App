import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import Popup from './PopUp'; // Make sure to import the Popup component

const ListView = ({ onEventPress, events, selectedCalendars }) => {
  // State to manage errors
  const [error, setError] = useState(null);
  // State to control the visibility of the Popup
  const [popupVisible, setPopupVisible] = useState(false);
  // State to store the selected events for the Popup
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Convert events object to an array
  const eventsArray = [];
  for (const [month, event] of Object.entries(events)) {
    event.forEach(item => {
      eventsArray.push(item);
    });
  }

  // Function to format events into sections by month
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

  // Format the events array into sections
  const sortedEventsArray = formatEvents(eventsArray);

  // Function to handle event press and show the Popup
  const handleEventPress = (item) => {
    setSelectedEvents([item]);
    setPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      {error ? (
        // Display error message if there's an error
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : selectedCalendars.length === 0 ? (
        // Display message if no calendars are selected
        <Text style={styles.noEventsText}>Please select a calendar to view events</Text>
      ) : sortedEventsArray.length > 0 ? (
        // Display the SectionList if there are events
        <SectionList
          stickySectionHeadersEnabled
          sections={sortedEventsArray}
          keyExtractor={(item) => item.id}
          style={styles.sectionList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => handleEventPress(item)}>
              <View style={item.organizer.email === 'pichealthtest@gmail.com' ? styles.picItem : styles.latinoItem}>
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
        // Display message if no events are available
        <Text style={styles.noEventsText}>No events available</Text>
      )}
      {/* Popup component to display event details */}
      <Popup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        events={selectedEvents}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  listItem: {
    marginHorizontal: 10,
    margin: 5,
  },
  picItem: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "hsla(360,80%,50%,0.6)",
  },
  latinoItem: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "hsla(200,80%,60%,0.6)",
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 14,
    color: '#555',
  },
  sectionHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'hsla(200, 0%, 20%, 0.6)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 10,
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
    borderRadius: 0
  },
  listBorder: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
  },
});