import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarView = ({ onEventPress, events, selectedCalendars }) => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const formatEvents = (events) => {
      const calendarColors = {
        'pichealthtest@gmail.com': 'red',
        'f98eb9b3491ce0f74ae3d3dca31849eedcd596b5f7a7cb5a8604f05932d11128@group.calendar.google.com': 'blue',
      };

      const formattedEvents = Object.keys(events).reduce((acc, date) => {
        const eventList = events[date];
        const dots = eventList.map(event => {
          const calendarId = event.organizer.email;
          const color = calendarColors[calendarId] || 'gray';
          return { color };
        });

        acc[date] = { dots };
        return acc;
      }, {});

      return formattedEvents;
    };

    if (selectedCalendars.length > 0) {
      const formattedEvents = formatEvents(events);
      setMarkedDates(formattedEvents);
    } else {
      setMarkedDates({});
    }
  }, [events, selectedCalendars]);

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        {selectedCalendars.length === 0 ? (
          <Text style={styles.noEventsText}>Please select a calendar to view events</Text>
        ) : (
          <Calendar
            markedDates={markedDates}
            markingType={'multi-dot'}
            onDayPress={(day) => {
              const selectedDateEvents = events[day.dateString] || [];
              selectedDateEvents.forEach(event => onEventPress(event));
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  calendarContainer: {
  },
  noEventsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});