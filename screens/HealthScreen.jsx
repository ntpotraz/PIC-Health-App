import React from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Disclaimer from '../components/Disclaimer';

export default function HealthScreen() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/beach-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
        blurRadius={0}
      >
        <Header title="Health">
          <Disclaimer description="The information provided here is for general informational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider for advice regarding your specific medical condition, symptoms, or treatment options. Do not disregard professional medical advice or delay seeking treatment." />
        </Header>
        <ScrollView>
          <View style={{ flex: 1, margin: 5, borderRadius: 10 }}>
            <View style={textBox.container}>
              <Text style={textBox.title}>Diabetes Screening</Text>
              <Text style={textBox.text}>This test is used to identify individuals who may have diabetes or are at risk of developing the condition, often before they show any noticeable symptoms.</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/prediabetes/risktest/index.html')}>
                <Text style={textBox.link}>Risk Test</Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Mental Wellness Resources</Text>
              <Text style={textBox.text}>Mental health resources are designed to support individuals in managing their emotional, psychological, and social well-being. Their purpose is to provide tools, guidance, and services to help people understand, cope with, and address mental challenges.</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/mental-health-101/')}>
                <Text style={textBox.link}>Mental Health 101</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/screening-tools/depression/?ref')}>
                <Text style={textBox.link}>Depression Screening</Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>True Care</Text>
              <Text style={textBox.text}>
                TrueCare is one of the most trusted healthcare 
                providers in San Diego and Riverside Counties. 
                Their friendly staff and compassionate physicians 
                specialize in providing quality healthcare and wellness 
                services to underserved communities so people can get the 
                care they need. Their goal is to make healthcare available 
                to everyone in the communities they serve, regardless of income 
                or insurance status.
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://truecare.org/')}>
                <Text style={textBox.link}>Homepage</Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Vista Community Clinic</Text>
              <Text style={textBox.text}>
                Valuable Connected Care: Meeting the health and wellness needs 
                of our community. A community where every person chooses health.
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.vistacommunityclinic.org/')}>
                <Text style={textBox.link}>Homepage</Text>
              </TouchableOpacity>
            </View>


            <View style={textBox.container}>
              <Text style={textBox.title}>Mindfulness Resources</Text>
              <Text style={textBox.text}>Mindfulness resources are designed to help individuals cultivate awareness, presence, and acceptance of the present moment. These resources aim to promote mental and emotional well-being by teaching practices that encourage mindfulness—essentially the practice of paying attention in a particular way: on purpose, in the present moment, and without judgment.</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.csusm.edu/mindfulcsusm/resources/index.html')}>
                <Text style={textBox.link}>Mindful CSUSM</Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Movement & Nutrition</Text>
              <Text style={textBox.text}>Movement and nutrition resources empower individuals to take charge of their health by providing the tools, knowledge, and guidance they need to make informed decisions about physical activity and dietary choices. The combined effect of regular movement and proper nutrition supports overall well-being, reduces disease risk, enhances mental health, improves energy, and promotes longevity.</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/cdi/indicator-definitions/npao.html')}>
                <Text style={textBox.link}>Chronic Disease Indicators</Text>
              </TouchableOpacity>
            </View>

            <View style={textBox.container}>
              <Text style={textBox.title}>Other</Text>
              <Text style={textBox.text}>
                Screening for cancer allows you to improve prognosis, 
                reduce mortality, identify early detection, and give you peace of mind.
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.cancer.org/cancer/screening/american-cancer-society-guidelines-for-the-early-detection-of-cancer.html')}>
                <Text style={textBox.link}>Cancer Screening</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Vista Community Clinic</Text>
            <Text style={textBox.text}>
             Valuable Connected Care: Meeting the health and wellness needs 
             of our community. A community where every person chooses health.
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
            This test is used to identify individuals who may have 
            diabetes or are at risk of developing the condition, often 
            before they show any noticeable symptoms.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/prediabetes/risktest/index.html  ')}>
              <Text style={textBox.link}>
               https://www.cdc.gov/prediabetes/risktest/index.html  
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Mental Wellness Resources</Text>
            <Text style={textBox.text}>
            Mental health resources are designed to support individuals in 
            managing their emotional, psychological, and social well-being. 
            Their purpose is to provide tools, guidance, and services to help 
            people understand, cope with, and address mental challenges. 
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/mental-health-101/')}>
              <Text style={textBox.link}>
               https://screening.mhanational.org/mental-health-101/
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/screening-tools/depression/?ref')}>
              <Text style={textBox.link}>
               https://screening.mhanational.org/screening-tools/depression/?ref
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Mental Health America</Text>
            <Text style={textBox.text}>
            Take charge of your mental health by becoming informed and proactive. 
            Address any worries you have about your well-being, and explore the 
            various treatment options available to you. Your mental health matters, 
            and help is within reach.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://screening.mhanational.org/mental-health-101/')}>
              <Text style={textBox.link}>
                Hyperlink
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Mindfullness Resources</Text>
            <Text style={textBox.text}>
            Mindfulness resources are designed to help individuals cultivate 
            awareness, presence, and acceptance of the present moment. These 
            resources aim to promote mental and emotional well-being by teaching 
            practices that encourage mindfulness—essentially the practice of paying 
            attention in a particular way: on purpose, in the present moment, and 
            without judgment.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.csusm.edu/mindfulcsusm/resources/index.html ')}>
              <Text style={textBox.link}>
               https://www.csusm.edu/mindfulcsusm/resources/index.html 
              </Text>
            </TouchableOpacity>
          </View>

          <View style={textBox.container}>
            <Text style={textBox.title}>Movement & Nutrition</Text>
            <Text style={textBox.text}>
            Movement and nutrition resources empower individuals to 
            take charge of their health by providing the tools, knowledge, 
            and guidance they need to make informed decisions about physical 
            activity and dietary choices. The combined effect of regular movement 
            and proper nutrition supports overall well-being, reduces disease risk, 
            enhances mental health, improves energy, and promotes longevity. 
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/cdi/indicator-definitions/npao.html  ')}>
              <Text style={textBox.link}>
               https://www.cdc.gov/cdi/indicator-definitions/npao.html  
              </Text>
            </TouchableOpacity>
          </View>
          <View style={textBox.container}>
            <Text style={textBox.title}>Other</Text>
            <Text style={textBox.text}>
            Screening for cancer allows you to improve prognosis, 
            reduce mortality, identify early detection, and give you peace of mind.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.cancer.org/cancer/screening/american-cancer-society-guidelines-for-the-early-detection-of-cancer.html')}>
              <Text style={textBox.link}>
               https://www.cancer.org/cancer/screening/american-cancer-society-guidelines-for-the-early-detection-of-cancer.html
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.cancer.org/cancer/screening/screening-quiz.html')}>
              <Text style={textBox.link}>
               https://www.cancer.org/cancer/screening/screening-quiz.html
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
