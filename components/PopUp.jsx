import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Linking, FlatList } from 'react-native';
import RenderHtml from 'react-native-render-html';

// Popup component to display event details in a modal
const Popup = ({ visible, onClose, events }) => {
  // If there are no events, do not render the popup
  if (!events || events.length === 0) return null;

  // Function to handle link presses within the HTML content
  const handleLinkPress = (event, href) => {
    Linking.openURL(href).catch(err => console.error('Failed to open URL:', err));
  };

  // Function to render each event in the FlatList
  const renderEvent = ({ item }) => (
    <View style={styles.eventContainer}>
      <Text style={styles.title}>{item.summary}</Text>
      {item.description ? (
        <RenderHtml
          contentWidth={300}
          source={{ html: item.description }}
          defaultTextProps={{ selectable: true }}
          renderersProps={{
            a: {
              onPress: handleLinkPress,
            },
          }}
        />
      ) : (
        <Text style={styles.noDescription}>No description available</Text>
      )}
      <Text style={styles.eventTime}>
        {new Date(item.start.dateTime || item.start.date).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='slide'
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* FlatList to render multiple events */}
          <FlatList
            data={events}
            keyExtractor={(item, index) => item.id + index}
            renderItem={renderEvent}
          />
          {/* Close button to close the popup */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;

// Styles for the Popup component
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  eventContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  eventTime: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2d4887',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});