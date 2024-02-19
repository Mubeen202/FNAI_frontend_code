import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View>
      <Text style={styles.container}>ProfileScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop:50
    },
  });
