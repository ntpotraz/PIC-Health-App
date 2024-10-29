import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarBar = ({ calendarMode, setCalendarMode }) => {
  // "Today" button functionality can be customized as needed
  const newEvent = () => {
    alert("Google Submission Sheet");
  };

  // Toggles between Calendar and List view
  const viewBtn = () => {
    setCalendarMode(prevMode => !prevMode);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={newEvent}>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>Submit Event</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>PIC Health App</Text>
      <TouchableOpacity onPress={viewBtn}>
        <View style={[styles.buttons, styles.calBtn]}>
          <Text style={styles.buttonText}>
            {calendarMode ? "List View" : "Calendar View"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d4887",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    shadowRadius: 3,
    shadowOffset: 4,
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttons: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#808080",
  },
  calBtn: {
    width: 100,
  },
  buttonText: {
    alignSelf: "center",
    color: "#FFFFFF",
  },
});
