import React from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Seperator from "../components/Seperator";
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1,}}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.image}
          blurRadius={4}
        >
          <Header title="About Us" />
          <ScrollView>

            {/* Logo and homepage title area */}
            <View style={{alignItems: 'center', margin: 20}}>
            <Text 
                style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
                  Pacific Islander Community Health
              </Text>
              <Image
                source={require('../assets/pic-logo.png')}
                style={{height: 200, width: 200, alignSelf: 'center'}}
              />
            </View>

            {/* Information section */}
            <View style={{backgroundColor: 'rgba(255, 255, 255, .9)', borderRadius: 10 }}>

              {/* Textbox */}
              <View style={textBox.container}>
                <Text style={textBox.title}>About Us</Text>
                <Text style={textBox.text}>
                  Established in 2013, Pacific Islander Community Health (PIC Health)
                  serves the Southern California region, by advancing health equity and
                  social justice for Pacific Islander communities through culturally centered
                  health initiatives and community-centered research. PIC Health is dedicated
                  to promoting wellness and resilience by addressing the unique health needs
                  and disparities our Pasifika communities endure and navigate every day.
                </Text>
              </View>
              <Text style={textBox.text}>
                  
                </Text>
                <Text style={textBox.text}>
                  Learn more:
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://pacificislandercommunityhealth.weebly.com/about-us.html')}>
                  <Image
                  source={require('../assets/Screenshot 2024-10-24 122310.png')}
                  style={{height: 200, width: 250, alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>

              <Seperator />
    
              <View style={textBox.container}>
                <Text style={textBox.title}>Our Mission</Text>
                <Text style={textBox.text}>
                  At PIC Health, our mission is to empower and uplift the Pacific Islander community
                  by promoting holistic health and wellness initiatives rooted in cultural sensitivity
                  and community engagement. Through collaborative research, advocacy, and education,
                  we strive to address indigenous health disparities, foster equitable access to
                  healthcare, and cultivate a thriving environment where every individual can achieve
                  their highest level of well-being.
                </Text>
              </View>

              <Seperator />
  
              <View style={textBox.container}>
                <Text style={textBox.title}>Land Acknowledgement</Text>
                <Text style={textBox.text}>
                  We acknowledge that the land on which we gather is the traditional territory
                  of the Luiseño/Payómkawichum people. PIC Health and its surrounding areas are
                  still home to the six federally recognized bands of the La Jolla, Pala, Pauma,
                  Pechanga, Rincon, Soboba Luiseño/Payómkawichum people.
                </Text>
              </View>

              {/* TO DO: Insert Social media links/icons */}
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
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
    color: 'white'
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  logo: {
    flex: 1,
    height: 250,
    width: 250,
    alignSelf: 'center',
  }
});

// styles for the content on the page
const textBox = StyleSheet.create({
  container: {
    //backgroundColor: 'rgba(0,0,0,.8)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: "black",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'thin',
    fontFamily: 'sans-serif',
    color: "hsl(200, 50%, 50%)",
  },
});
