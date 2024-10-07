import { StyleSheet, View, FlatList, Text } from "react-native";


const eventData = [
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
  { title: "Halloween Party", desc: "Join our pirate and sailor themed party!", date: "8/31" },
]

const EventListItem = ({ title, desc, date }) => {

  return (
    <View style={styles.listItem}>
      <View style={styles.nameDesc}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDescription}>{desc}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  )
}

const EventList = () => {
  return (
      <FlatList
        style={styles.flatlist}
        data={eventData}
        renderItem={({ item }) => <EventListItem title={item.title} desc={item.desc} date={item.date} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
  )
}

export default EventList;

const styles = StyleSheet.create({
  flatlist: {
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
});
