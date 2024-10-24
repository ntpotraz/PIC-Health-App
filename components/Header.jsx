import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={header.container}>
      <Image
        style={{ width: 60, height: 60 }}
        source={require('../assets/pic-logo.png')}
      />
      <Text style={header.title}>Health Resources</Text>
    </View>
  )
}

export default Header

// styles for the top header bar
const header = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 65,
      backgroundColor: 'rgba(45, 72, 135, 0)',
      
      shadowColor: 'black',
      borderBottomEndRadius: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      color: 'white',
    },
    toggle: {

    }
  });