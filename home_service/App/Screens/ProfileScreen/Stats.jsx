import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import Chart from './Charts'

export default function Stats({correctScore, outComes, incorrect, total_predictoins }) {
    
  const yellowPercentage = Math.round((outComes / total_predictoins) * 100);
  const redPercentage = Math.round((incorrect / total_predictoins) * 100);
  const greenPercentage = Math.round((correctScore / total_predictoins) * 100);
  return (
    <View style={styles.container}>
          {/* 6 Texts in Vertical */}
          <View style={{ paddingLeft: 10 }}>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.GREEN, fontSize: 32, textAlign: 'center' }}>{correctScore}</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 16, textAlign: 'center' }}>Correct Score</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.YELLOW, fontSize: 32, textAlign: 'center' }}>{outComes}</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 16, textAlign: 'center' }}>Correct Outcomes</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.RED, fontSize: 32, textAlign: 'center' }}>{incorrect}</Text>
              <Text style={{ color: Colors.WHITE, paddingLeft:4, fontSize: 16, textAlign: 'center' }}>Incorrect</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={{paddingRight:14}}>
          <Chart greenPercentage={greenPercentage} redPercentage={redPercentage} yellowPercentage={yellowPercentage} radius={100} innerRadius={80} />
          <Text style={{ color: Colors.GREEN, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:-150 }}> {greenPercentage}%</Text>
          <Text style={{ color: Colors.YELLOW, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:0 }}> {yellowPercentage}%</Text>
          <Text style={{ color: Colors.RED, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:0 }}> {redPercentage}%</Text>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  });