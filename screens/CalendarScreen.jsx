import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import ListView from "../components/ListView";
import CalendarView from "../components/CalendarView";
import { useState } from "react";


const CalendarBar = ({ calendarMode, setCalendarMode }) => {

  const todayBtn = () => {
    alert("Today Pressed");
  }

  const viewBtn = () => {
    setCalendarMode(prevMode => !prevMode);
  }

  return (
    <View style={barStyles.container}>
      <TouchableOpacity onPress={todayBtn}>
        <View style={barStyles.buttons}>
          <Text style={barStyles.buttonText}>Today</Text>
        </View>
      </TouchableOpacity>
      <Text style={{fontSize: 24, fontWeight: "bold", color: "white"}}>PIC Health App</Text>
      <TouchableOpacity onPress={viewBtn}>
        <View style={[barStyles.buttons, barStyles.calBtn]}>
          <Text style={barStyles.buttonText}>View</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

// This is for line 28 to switch the View text
// <Text style={barStyles.buttonText}>{calendarMode ? "List View" : "Calendar View"}</Text>

const barStyles = StyleSheet.create({
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
    borderColor: "#808080"
  },
  calBtn: {
    width: 75,
  },
  buttonText: {
    alignSelf: "center",
    color: "#FFFFFF",
  }

})

const CalendarPage = () => {

  const [calendarMode, setCalendarMode] = useState(true);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        blurRadius={4}
      >
        <View style={styles.darken}>
          <CalendarBar calendarMode={calendarMode} setCalendarMode={setCalendarMode} />
          {calendarMode ? <CalendarView /> : <ListView />}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

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
})
