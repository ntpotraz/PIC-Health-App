import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    <Agenda
      items={events}
      renderItem={(item) => (
        <TouchableOpacity onPress={() => onEventPress(item)}>
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderEmptyDate={() => <Text>No events for today</Text>}
    />
  );
};

export default CalendarView;
