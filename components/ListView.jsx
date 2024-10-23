import React, { useState } from 'react';
import { StyleSheet, View, SectionList, Text, TouchableOpacity } from "react-native";
import Popup from './PopUp'; // Import the Popup component

const eventData = [
  {
    month: "October",
    data: [
      { eventName: "Halloween Party", eventDesc: "Join our pirate and sailor themed party!", eventDate: "10/31" },
      { eventName: "Halloween Party", eventDesc: "Join our pirate and sailor themed party!", eventDate: "10/31" },
      { eventName: "Halloween Party", eventDesc: "Join our pirate and sailor themed party!", eventDate: "10/31" },
    ],
  },
  {
    month: "November",
    data: [
      { eventName: "Thanksgiving Party", eventDesc: "Come eat a lot of food", eventDate: "11/28" },
      { eventName: "Thanksgiving Party", eventDesc: "Come eat a lot of food", eventDate: "11/28" },
    ],
  },
  {
    month: "December",
    data: [
      { eventName: "Christmas Party", eventDesc: "Come get drunk and hit on coworkers", eventDate: "12/25" },
    ],
  },
]

const EventListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.listItem}>
        <View style={styles.nameDesc}>
          <Text style={styles.eventTitle}>{item.eventName}</Text>
          <Text style={styles.eventDescription}>{item.eventDesc}</Text>
        </View>
        <Text style={styles.date}>{item.eventDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListView = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleEventPress = (event) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedEvent(null);
  };

  const handleGoing = () => {
    alert("Marked as Going");
    handleClosePopup();
  };

  const handleNotGoing = () => {
    alert("Marked as Not Going");
    handleClosePopup();
  };

  const handleMaybe = () => {
    alert("Marked as Maybe");
    handleClosePopup();
  };

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionlist}
        sections={eventData}
        renderItem={({ item }) => <EventListItem item={item} onPress={handleEventPress} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.month}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Popup
        visible={isPopupVisible}
        onClose={handleClosePopup}
        event={selectedEvent}
        onGoing={handleGoing}
        onNotGoing={handleNotGoing}
        onMaybe={handleMaybe}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  sectionlist: {
    flex: 1,
  },
  separator: {
    height: 10,
  },
  listItem: {
    width: "95%",
    minHeight: 100,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    flexDirection: 'row',
    alignSelf: "center",
  },
  nameDesc: {
    flex: 5,
    gap: 10,
    color: "white",
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color:"white",
  },
  eventDescription: {
    color: "white",
  },
  date: {
    flex: 1,
    fontSize: 22,
    alignSelf: "center",
    color: "white",
  },
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginBottom: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: "white",
  },
});
