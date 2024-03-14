import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { icon } from './constants/icons';

export default function RankingProgress() {
  return (
    <View style={{ marginVertical: 10 }}>
          {/* Progress Bar */}
          <View style={styles.container}>
            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progress} />
            </View>

            {/* Icons Row */}
            <View style={styles.iconContainer}>
              {/* Icons */}
              {icon.map((icon, index) => (
              <Image
                key={index} // Use a more descriptive key
                source={icon.link}
                style={styles.icons}
              />
            ))}
            </View>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignItems: 'center',  justifyContent: 'space-between', gap:10},
    progressContainer:{ width: "100%", height: 20, backgroundColor: Colors.LIGHT_GREY, borderRadius: 8 },
    progress:{ width: '50%', height: '100%', backgroundColor:Colors.GREEN, borderRadius: 8 },
    iconContainer:{ flexDirection: 'row', alignItems: 'center' },
    icons:{ width: 20, height: 20, marginHorizontal: 5 }
   
  });