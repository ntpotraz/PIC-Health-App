import React from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const events = [
  {
    month: 'October',
    data: [
      { title: 'Halloween Party', description: 'Join our pirate and sailor themed party!', date: '10/31' },
      { title: 'Halloween Party', description: 'Join our pirate and sailor themed party!', date: '10/31' },
      { title: 'Halloween Party', description: 'Join our pirate and sailor themed party!', date: '10/31' },
    ],
  },
  {
    month: 'November',
    data: [
      { title: 'Thanksgiving Party', description: 'Come eat a lot of food', date: '11/28' },
      { title: 'Thanksgiving Party', description: 'Come eat a lot of food', date: '11/28' },
    ],
  },
];

export default function EventList() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SectionList
        sections={events}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { month } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{month}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#e0e0e0',
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventContainer: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
