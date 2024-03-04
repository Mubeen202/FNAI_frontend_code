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
console.log('match data', matchData.map((item)=>(item.stats)))
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

        {/* <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        stats={[
          {user_id:1, team1:4, team2:4},
          {user_id:2, team1:2, team2:3},
          {user_id:3, team1:3, team2:1},
          {user_id:4, team1:2, team2:3},
          {user_id:5, team1:0, team2:2},
          {user_id:6, team1:4, team2:0},
          {user_id:7, team1:3, team2:3},
          {user_id:8, team1:6, team2:4},
          {user_id:9, team1:4, team2:1},
          {user_id:10, team1:5, team2:3},
          {user_id:11, team1:6, team2:6},
        ]}
      /> */}

      
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_GREY,
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingTop: 0, // Adjust paddingTop as needed
    paddingBottom: 20, // Adjust paddingBottom as needed
    gap:-8,
  },
});