import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors';
import TopNavigationScreen from '../TopNavigation/TopNavigationScreen';
import Premier from '../TopNavigation/Premier/Premier';
import PremierNavigation from '../TopNavigation/Premier/PremierNavigation.jsx/PremierNavigation';
const windowWidth = Dimensions.get('window').width; // Get the window width

export default function UpNext() {
  return (
    <View style={styles.container}> 
      <TopNavigationScreen/>
        
      
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
