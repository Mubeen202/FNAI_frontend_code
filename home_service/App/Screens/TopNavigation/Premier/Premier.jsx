import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import MatchCard from './MatchCard';

export default function Premier() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />
     <MatchCard
        team1Name="Manchester City"
        team1Image={require('../../../../assets/teams/Manchester_City_FC_badge.svg.png')}
        team2Name="Manchester United"
        team2Image={require('../../../../assets/teams/Manchester_United_FC_crest.svg.png')}
        date="19-02-2024"
        time="04:05"
        likes={120}
        dislikes={20}
        shares={50}
      />

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