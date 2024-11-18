import React, { Children } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';


export default function HealthScreen() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/beach-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
        blurRadius={0}
      >
      <Header title="Health" />
      <ScrollView>
        <View style={{ flex: 1,  margin: 5, borderRadius: 10}}>

          <View style={textBox.container}>
            <Text style={textBox.title}>True Care</Text>
            <Text style={textBox.text}>
            Health care provider in San Diego and Riverside
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://truecare.org/about/')}>
              <Text style={textBox.link}>
              https://truecare.org/about/
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Vista Community Clinic</Text>
            <Text style={textBox.text}>
             Health care provider in Southern California in general
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.vistacommunityclinic.org/about/')}>
              <Text style={textBox.link}>
               https://www.vistacommunityclinic.org/about/
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Diabetes Screening</Text>
            <Text style={textBox.text}>
             Health care provider in Southern California in general
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.vistacommunityclinic.org/about/')}>
              <Text style={textBox.link}>
               https://www.vistacommunityclinic.org/about/
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Mental Wellness Resources</Text>
            <Text style={textBox.text}>
            Take charge of your mental health by becoming informed and proactive. 
            Address any worries you have about your well-being, and explore the 
            various treatment options available to you. Your mental health matters, 
            and help is within reach. If you have any concerns about depression, 
            you can take a depression test for more clarity.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/mental-health-101/')}>
              <Text style={textBox.link}>
               Mental Health 101
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/screening-tools/depression/?ref')}>
              <Text style={textBox.link}>
               Depression Test
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Mindfullness Resources</Text>
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
            <Text style={textBox.title}>Movement & Nutrition</Text>
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
  content: {
    
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

const textBox = StyleSheet.create({
  container: {
    //backgroundColor: 'white',
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
  // used for lists
  link: {
    padding: 0,
    color: 'rgba(45, 72, 135, 1)',
    fontSize: 18,
  }
});
