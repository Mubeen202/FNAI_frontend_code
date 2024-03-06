import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import TopNavigationResult from '../TopNavigation/TopNavigationResult';
const windowWidth = Dimensions.get('window').width; // Get the window width

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <TopNavigationResult/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      backgroundColor: Colors.LIGHT_GREY,
      paddingRight: 10,
      paddingLeft: 2,
      marginTop:0,
    
    
    },
    text:{
        color: Colors.WHITE
    }
  });