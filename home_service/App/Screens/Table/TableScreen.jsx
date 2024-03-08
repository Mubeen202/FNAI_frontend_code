import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import TopNavigationTable from '../TopNavigation/TopNavigationTable';

export default function TableScreen() {
  return (
    <View style={styles.container}>
      <TopNavigationTable/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_PURPLE,
    padding: 2,
  },
  text:{
      color: Colors.WHITE
  }
});