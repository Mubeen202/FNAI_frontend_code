import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../Utils/Colors';
import MatchCard from './MatchCard';
import teamsData from './TeamsData'

export default function Premier() {
const [matchData, setMatchData]=useState(teamsData)
useEffect(()=>{
  setMatchData(teamsData)
  
},[matchData])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {matchData.map((item, index) => (
      <MatchCard
        key={index} // Make sure to add a unique key prop
        team1Name={item.team1Name}
        team1Image={item.team1Image}
        team2Name={item.team2Name}
        team2Image={item.team2Image}
        date={item.date}
        time={item.time}
        stats={item.stats}
      />
      
    ))}
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_GREY,
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingTop: 0, // Adjust paddingTop as needed
    paddingBottom: 20, // Adjust paddingBottom as needed
    gap:-8,
  },
});