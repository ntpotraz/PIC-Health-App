import { View, Text , StyleSheet, Image } from 'react-native'
import Disclaimer from './Disclaimer';
import React from 'react'

const Header = ({ title }) => {
  
  return (
    <View style={header.container}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require('../assets/pic-logo.png')}
        /> 
        <Text style={header.title}>{title}</Text>
      </View>
      <Disclaimer description={"Hello this is a description"}/>
    </View>
  )
}

export default Header

// styles for the top header bar
const header = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 65,
      backgroundColor: 'rgba(45, 72, 135, 1)',
      
      shadowColor: 'black',
      borderBottomEndRadius: 1,
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      color: 'white',
    },
    toggle: {

    },
  });