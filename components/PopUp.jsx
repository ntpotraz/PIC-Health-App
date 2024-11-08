import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import RenderHtml from 'react-native-render-html';

const Popup = ({ visible, onClose, event, onGoing, onNotGoing, onMaybe }) => {
  if (!event) return null;

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{event.summary}</Text>
          {event.description ? (
            <RenderHtml
            contentWidth={300} // adjust
            source={{ html: event.description }}
            defaultTextProps={{ selectable: true }}
            onLinkPress={(evt, href) => {
              Linking.openURL(href).catch(err => console.error("Failed to open URL:", err));
            }}
            />
          ) : (
            <Text style={styles.description}>{event.description ? renderDescriptionWithLinks(event.description) : "No Description available"}</Text>
          )}
          <Text style={styles.date}>
            Date: {new Date(event.start.dateTime || event.start.date).toLocaleString()}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onGoing}>
              <Text style={styles.buttonText}>Going</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onNotGoing}>
              <Text style={styles.buttonText}>Not Going</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onMaybe}>
              <Text style={styles.buttonText}>Maybe</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  linkText: {
    fontsize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
