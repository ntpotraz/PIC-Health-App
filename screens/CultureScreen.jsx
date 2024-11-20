import React from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

export default function CultureScreen() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/beach-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
        blurRadius={0}
      >
        <Header title="Culture, Arts, & Language"/>
        <ScrollView>
          <View style={{ flex: 1, margin: 5, borderRadius: 10 }}>

            <View style={textBox.container}>
              <Text style={textBox.title}>Umeke</Text>
              <Text style={textBox.text}>
               Educational program about Hawaiian culture
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.umeke.org/')}>
                <Text style={textBox.link}>
                 https://www.umeke.org/
                </Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Language Courses</Text>
              <Text style={textBox.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                <Text style={textBox.link}>
                  Hyperlink
                </Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Movement Class</Text>
              <Text style={textBox.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                <Text style={textBox.link}>
                  Hyperlink
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
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
});

const textBox = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(45, 72, 135, 1)',
  },
  text: {
    color: 'black',
  },
  link: {
    padding: 0,
    color: 'rgba(45, 72, 135, 1)',
    fontSize: 18,
  }
});
