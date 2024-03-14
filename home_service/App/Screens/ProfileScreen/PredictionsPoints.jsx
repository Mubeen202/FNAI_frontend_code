import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function PredictionsPoints({total_predictoins, pointsObtaing, per_prediction }) {
  return (
    <View style={styles.container}>
          <View style={{paddingLeft:8}}>
            <Text style={styles.numberText}>{total_predictoins}</Text>
            <Text style={styles.text}>Predictions</Text>
          </View>
          <View >
            <Text style={styles.numberText}>{pointsObtaing}</Text>
            <Text style={[styles.text, {paddingLeft:24}]}>Points</Text>
          </View>
          <View >
            <Text style={styles.numberText}>{parseFloat(per_prediction.toFixed(2))}</Text>
            <Text style={styles.text}>Per Prediction</Text>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    numberText: {alignItems:'center', paddingLeft:14, color:Colors.WHITE, fontSize:32},
    text:{alignItems:'center',   color:Colors.WHITE, fontSize:16}
    
  });