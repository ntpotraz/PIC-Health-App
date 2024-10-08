import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { useState } from "react";


const CalendarBar = ( {calendarMode, setCalendarMode} ) => {

  const todayBtn = () => {
    alert("Today Pressed");
  }

  const viewBtn = () => {
    setCalendarMode(prevMode => !prevMode);
  }

  return (
    <SafeAreaView style={barStyles.container}>
      <TouchableOpacity onPress={todayBtn}>
        <View style={barStyles.buttons}>
          <Text style={barStyles.buttonText}>Today</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={viewBtn}>
        <View style={barStyles.buttons}>
          <Text style={barStyles.buttonText}>Calendar View</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const barStyles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    shadowRadius: 3,
    shadowOffset: 4,
  },
  buttons: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
})

const CalendarPage = () => {

  const [calendarMode, setCalendarMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <CalendarBar calendarMode={calendarMode} setCalendarMode={setCalendarMode} />
      {calendarMode ? <CalendarView /> : <ListView />}
    </SafeAreaView>
  )
}

export default CalendarPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
