import React, { useState, useEffect } from 'react';
import { ImageBackground, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ListView from "../components/ListView";
import CalendarView from "../components/CalendarView"
import Popup from "../components/PopUp";
import CalendarBar from "../components/CalendarBar"; 

import { fetchCalendarEvents } from '../services/GoogleCalendarService';

const CalendarPage = () => {
  const [calendarMode, setCalendarMode] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [events, setEvents] = useState({});
  const [selectedCalendars, setSelectedCalendars] = useState([]);

  const calendarOptions = [
    { key: 'pichealthtest@gmail.com', value: 'Pacific Islander Community' },
    { key: 'f98eb9b3491ce0f74ae3d3dca31849eedcd596b5f7a7cb5a8604f05932d11128@group.calendar.google.com', value: 'Latino Community' }
  ];

  /*  TODO: Not important right now but we should have the loadEvents() selectedCalendars() functions
  *         in the utils directory for the future. the DropdownSelectList logic is spread across 3
  *         different files (CalendarBar, CalendarScreen, CalendarView)
  */
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


  const handleEventPress = (event) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedEvent(null);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        blurRadius={4}
      >
        <View style={styles.darken}>
          <CalendarBar 
            calendarMode={calendarMode} 
            setCalendarMode={setCalendarMode} 
            setSelectedCalendars={setSelectedCalendars}
            calendarOptions={calendarOptions}
          />
          {calendarMode 
            ? <CalendarView 
              onEventPress={handleEventPress}
              events={events}
              selectedCalendars={selectedCalendars}
            /> 
            : <ListView 
              onEventPress={handleEventPress}
              events={events}
              selectedCalendars={selectedCalendars}
            />}
        </View>
      </ImageBackground>
      <Popup 
        visible={popupVisible} 
        onClose={closePopup} 
        event={selectedEvent} 
        onGoing={() => console.log('Going')} 
        onNotGoing={() => console.log('Not Going')} 
        onMaybe={() => console.log('Maybe')} 
      />
    </SafeAreaView>
  );
};

export default CalendarPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  darken: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});
