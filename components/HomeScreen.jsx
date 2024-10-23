import React from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../assets/background.png")}
        blurRadius={4}
      >
        <ScrollView>
          <View style={textBox.container}>
            <Text style={textBox.title}>ABOUT</Text>
            <Text style={textBox.text}>
              Established in 2013, Pacific Islander Community Health (PIC Health)
              serves the Southern California region, by advancing health equity and
              social justice for Pacific Islander communities through culturally centered
              health initiatives and community-centered research. PIC Health is dedicated
              to promoting wellness and resilience by addressing the unique health needs
              and disparities our Pasifika communities endure and navigate every day.
            </Text>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>LAND ACKNOWLEDGEMENT</Text>
            <Text style={textBox.text}>
              We acknowledge that the land on which we gather is the traditional territory
              of the Luiseño/Payómkawichum people. PIC Health and its surrounding areas are
              still home to the six federally recognized bands of the La Jolla, Pala, Pauma,
              Pechanga, Rincon, Soboba Luiseño/Payómkawichum people.
            </Text>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>MISSION STATEMENT</Text>
            <Text style={textBox.text}>
              At PIC Health, our mission is to empower and uplift the Pacific Islander community
              by promoting holistic health and wellness initiatives rooted in cultural sensitivity
              and community engagement. Through collaborative research, advocacy, and education,
              we strive to address indigenous health disparities, foster equitable access to
              healthcare, and cultivate a thriving environment where every individual can achieve
              their highest level of well-being.
            </Text>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>MISSION STATEMENT</Text>
            <Text style={textBox.text}>
              At PIC Health, our mission is to empower and uplift the Pacific Islander community
              by promoting holistic health and wellness initiatives rooted in cultural sensitivity
              and community engagement. Through collaborative research, advocacy, and education,
              we strive to address indigenous health disparities, foster equitable access to
              healthcare, and cultivate a thriving environment where every individual can achieve
              their highest level of well-being.
            </Text>
          </View>

        </ScrollView>
      </ImageBackground>

    </SafeAreaView>
  );
}

// styles for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: 'thin',
    fontFamily: 'sans-serif',
  },
});

// styles for the content on the page
const textBox = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: 'thin',
    fontFamily: 'sans-serif',
    color: "hsl(200, 50%, 50%)"
  },
});
