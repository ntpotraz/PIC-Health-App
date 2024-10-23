import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { useState } from "react";
import { BlurView } from "expo-blur";


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

      <TouchableOpacity onPress={viewBtn}>
        <View style={[barStyles.buttons, barStyles.calBtn]}>
          <Text style={barStyles.buttonText}>{calendarMode ? "List View" : "Calendar View"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const barStyles = StyleSheet.create({
  container: {
    backgroundColor: "#2d4887",
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
    borderColor: "#808080"
  },
  calBtn: {
    width: 115,
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
      >
        <BlurView intensity={20} style={styles.blur}>
          <View style={styles.darken}>
            <CalendarBar calendarMode={calendarMode} setCalendarMode={setCalendarMode} />
            {calendarMode ? <CalendarView /> : <ListView />}
          </View>
        </BlurView>
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
    tintColor: "#000000",
  },
  darken: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  blur: {
    flex: 1,
  },
})
