import React from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import WebView from 'react-native-webview';

const WebViewModal = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.webviewContainer}>
            <WebView
              source={{ uri: "https://forms.gle/Tkgafh2Qa4kTmG1N9" }}
              style={styles.webview}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
              }}
            />
          </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === "ios" ? 50 : 0,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    minHeight: 44,
  },
  closeButton: {
    padding: 8,
    marginLeft: 10,
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  webviewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});

export default WebViewModal;
