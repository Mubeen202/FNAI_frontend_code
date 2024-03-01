import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import TopNavigationScreen from '../TopNavigation/TopNavigationScreen';
const windowWidth = Dimensions.get('window').width; // Get the window width

export default function UpNext() {
  return (
    <View style={styles.container}> 
      <TopNavigationScreen/>
      {/* <Text>this is scr</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: Colors.LIGHT_GREY,
    paddingRight: 20,
    marginTop:0,
  
  },
  text:{
    color: Colors.WHITE
  }
});
