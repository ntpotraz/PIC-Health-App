import { StyleSheet, SafeAreaView, View, SectionList, Text } from "react-native";


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

const EventListItem = props => {
  const { eventName, eventDesc, eventDate } = props.item;
  return (
    <View style={styles.listItem}>
      <View style={styles.nameDesc}>
        <Text style={styles.eventTitle}>{eventName}</Text>
        <Text style={styles.eventDescription}>{eventDesc}</Text>
      </View>
      <Text style={styles.date}>{eventDate}</Text>
    </View>
  )
}

const EventList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.sectionlist}
        sections={eventData}
        renderItem={({ item }) => <EventListItem item={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.month}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    alignSelf: "center",
  },
  nameDesc: {
    flex: 5,
    gap: 10,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  date: {
    flex: 1,
    fontSize: 24,
    alignSelf: "center",
  },
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: "#eee"
  },
});
