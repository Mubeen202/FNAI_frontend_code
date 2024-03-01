import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
const MatchCard = ({ team1Name, team1Image, team2Name, team2Image, date, time, likes, dislikes, shares }) => {
  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.section}>
        <View style={styles.teamContainer}>

        <Text numberOfLines={1} style={styles.text}>{team1Name}</Text>
        <Image source={team1Image} style={styles.image} />
        </View>
      
        
      </View>

      {/* Middle Section */}
      <View style={[styles.section, styles.middleSection]}>
        <Text style={styles.vsText}>VS</Text>
        <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>

        <View style={styles.stats}>

                        {/* First column */}
                <View style={styles.column}>
                    <Text style={{color:Colors.WHITE, fontSize:12}}>10%</Text>
                    <AntDesign name="like1" size={24} color="red" />

                </View>
                {/* Second column */}
                <View style={styles.column}>
                <Text style={{color:Colors.WHITE, fontSize:12}}>20%</Text>
                    <AntDesign name="like1" size={24} color="white" />

                </View>
                {/* Third column */}
                <View style={styles.column}>
                <Text style={{color:Colors.WHITE, fontSize:12}}>80%</Text>
                    <AntDesign name="like1" size={24} color="green" />

                </View>
        </View>

       

     
        </View>
       

      {/* Last Section */}
      <View style={styles.section}>
      <Text numberOfLines={1} style={styles.otherteamtext}>{team2Name}</Text>
        <Image source={team2Image} style={styles.image} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 10,
    padding: 6,
    margin: 10,
    gap:60
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  middleSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamContainer:{
    alignItems:'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  text: {
    marginBottom: 20, // Add margin bottom for vertical space
    color:Colors.WHITE,
    fontSize:12,
    width:80,
    alignItems:'center'
  },

  otherteamtext: {
    marginBottom: 20, // Add margin bottom for vertical space
    color:Colors.WHITE,
    fontSize:12,
    width:100,
    alignItems:'center'
  },



  vsText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'yellow',
    textAlign: 'center', // Align text in the center
    width: 64,
    padding: 5,
    marginTop: -8,
    height: 40,
 },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add space between date and time
    alignItems: 'center',
    backgroundColor: 'grey',
    color: 'white',
    padding:4,
    borderRadius: 89,
    width: 160,
    marginTop: 6, // Add margin top for vertical space
},
  date: {
    color: 'white',
  },
  time: {
    color: 'white',
  },

  stats: {
    gap:120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 8, // Add margin top for vertical space
  },
  icon: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Add space between items
  },
  column: {
    alignItems: 'center', // Center items vertically
  },

 
});

export default MatchCard;
