import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../../../Utils/Colors";
const MatchCard = ({
    team1Name,
    team1Image,
    team2Name,
    team2Image,
    team1Goals,
    team2Goals
  }) => {

      // Determine the winning team or if it's a draw
        let winner = null;
        if (team1Goals > team2Goals) {
            winner = "team1";
        } else if (team1Goals < team2Goals) {
            winner = "team2";
        } else {
            winner = "draw";
        }

  
    useEffect(()=>{team1Name,
      team1Image,
      team2Name,
      team2Image,
      team1Goals,
      team2Goals
    },[])
  
  
  
  
  
    return (
      <>
      <View style={styles.container}>
        {/* First Section */}
        <View style={styles.section}>
          <View style={styles.teamContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {team1Name}
            </Text>
            {winner === "team1" && <FontAwesome5 name="trophy" size={16} color="gold" />}
            <Image source={team1Image} style={styles.image} />
          </View>
        </View>
  
        {/* Middle Section */}
        <View style={[styles.section, styles.middleSection]}>
          <Text style={styles.vsText}>VS</Text>
          <View style={styles.goalContainer}>
          <Text style={styles.team1}>{team1Goals}</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.team2}>{team2Goals}</Text>
          </View>
  
   
        </View>
  
        {/* Last Section */}
        <View style={styles.section}>
          <Text numberOfLines={1} style={styles.otherteamtext}>
            {team2Name}
          </Text>
          {winner === "team2" && <FontAwesome5 name="trophy" size={16} color="gold" />}
          <Image source={team2Image} style={styles.image} />
        </View>
  
  
  
  
        
      </View>
      
  </>
      
  
  
  
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: Colors.DARK_GREY,
      borderRadius: 10,
      padding: 6,
      margin: 10,
      gap: 60,
    },
    section: {
      flex: 1,
      alignItems: "center",
    },
    middleSection: {
      flexDirection: "column",
      alignItems: "center",
    },
    teamContainer: {
      alignItems: "center",
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 25,
    },
   
    otherteamtext: {
      marginBottom: 10, // Add margin bottom for vertical space
      color: Colors.WHITE,
      fontSize: 12,
      width: 100,
      alignItems: "center",
    },
    text: {
        marginBottom: 20, // Add margin bottom for vertical space
        color: Colors.WHITE,
        fontSize: 12,
        width: 80,
        alignItems: "center",
      },
    
    vsText: {
      fontSize: 32,
      fontWeight: "bold",
      color: "red",
      backgroundColor: "yellow",
      textAlign: "center", // Align text in the center
      width: 64,
      padding: 5,
      marginTop: -4,
      height: 44,
    },
    goalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "grey",
      padding: 4,
      borderRadius: 19,
      width: 140,
      height: 60,
      marginTop: 6,
    },
    team1: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'italic',
      paddingLeft: 16,
    },
    colon: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    team2: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'italic',
      paddingRight: 16,
    },
  
    icon: {
      fontSize: 14,
    },
   
    column: {
      alignItems: "center", // Center items vertically
    },
  });
export default MatchCard;
