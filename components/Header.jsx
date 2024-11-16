import { View, Text , StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Header = ({ title }) => {
  // function
  const handlePress = () => {
    
  }


  return (
    <View style={header.container}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require('../assets/pic-logo.png')}
        />
        <Text style={header.title}>{title}</Text>
      </View>
      
      <View style={header.iconContainer}>
        <TouchableOpacity 
          onPress={() => {
            Alert.alert("Discalimer:", "Description");
          }}
        >
          <Icon
            name='information-circle-outline'
            size={25}
            color='white'
          />
        </TouchableOpacity>
      </View>
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

    },
    iconContainer: {
      paddingRight: 10,
    },

  });