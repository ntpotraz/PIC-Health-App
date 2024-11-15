import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RenderHTML from 'react-native-render-html';

const CalendarView = ({ onEventPress, events, selectedCalendars }) => {
  const [markedDates, setMarkedDates] = useState({});
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Helper function to add days
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  // Open links in description
  const handleLinkPress = (event, href) => {
    Linking.openURL(href).catch(err => console.error("Failed to open URL:", err));
  };

  // Format description HTML to add <br> before links
  const formattedDescription = (description) => {
    return description.replace(/<a /g, '<br><a '); // adds <br> before each <a> tag to move links to new line
  };

  // Format and mark events on the calendar
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

  // Filter upcoming events within the next 7 days
  useEffect(() => {
    const filterUpcomingEvents = () => {
      const today = new Date();
      const endDate = addDays(today, 7);
      const upcomingEventsList = [];
      
      if (events && typeof events === 'object') {
        Object.entries(events).forEach(([date, eventsOnDate = []]) => {
          if (Array.isArray(eventsOnDate)) {
            eventsOnDate.forEach(event => {
              const eventDateObj = new Date(event.start?.dateTime || event.Start?.date);

              if (!isNaN(eventDateObj) && eventDateObj >= today && eventDateObj <= endDate) {
                upcomingEventsList.push({
                  name: event.summary,
                  date,
                  time: event.time,
                  description: event.description || 'No description available',
                  dateTime: event.start.dateTime || event.start.date,
                  organizer: event.organizer
                });
              }
            });
          }
        });
      }
      
      // Sort upcoming events by date and time
      upcomingEventsList.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
      setUpcomingEvents(upcomingEventsList);
    };

      filterUpcomingEvents();
    }, [events]);

  return (
    <View style={styles.container}>
      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          markingType={'multi-dot'}
          onDayPress={(day) => {
            const selectedDateEvents = events[day.dateString] || [];
            selectedDateEvents.forEach(event => onEventPress(event));
          }}
        />
      </View>
      
      {/* wellness check & SOS Button Section */}
      <View style={styles.middleBtns}>
        <TouchableOpacity style={{flex: 1, alignItems:"center"}}>
          <View style={styles.wellnessSOS}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Wellness Check</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, alignItems:"center"}}>
          <View style={styles.wellnessSOS}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Upcoming Events section*/}
      <ScrollView style={styles.upcomingEventsContainer}>
        <Text style={styles.upcomingTitle}>Upcoming Events</Text>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <View key={index} 
            style={event.organizer?.email === "pichealthtest@gmail.com" ? styles.picEvent : styles.latinoEvent}>
              <Text style={styles.eventTitle}>{event.name}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
              {event.description ? (
                <RenderHTML
                  contentWidth={300}
                  source={{ html: formattedDescription(event.description) }}
                  defaultTextProps={{ selectable: true }}
                  renderersProps={{
                    a: {
                      onPress: handleLinkPress,
                    },
                  }}
                />
              ) : (
                <Text style={styles.eventTime}> No description available</Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noEventText}>No upcoming events</Text>
        )}
      </ScrollView>
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
  middleBtns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20, // Add space between calendar and buttons
  },
  wellnessSOS: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
  },
  picEvent: {
    padding: 15, 
    borderRadius: 15,
    backgroundColor: "hsla(360,80%,50%,0.6)", // red color
    marginHorizontal: 10,
    marginBottom: 10,
  },
  latinoEvent: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "hsla(200,80%,60%,0.6)", // blue color
    marginHorizontal: 10,
    marginBottom: 10,
  },
  upcomingEventsContainer: {
    marginTop: 20,
  },
  upcomingTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'hsla(200, 0%, 20%, 0.6)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
  },
  eventTime: {
    fontSize: 14,
    color: '#555',
  },
  eventDescription: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
  },
  noEventText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
