import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MentalHealth() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Health Screen</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    color: "white",
    margin: "auto",
  },
});
