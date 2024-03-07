import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import Colors from "../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import DropdownMenu from "./DropdownMenu";
const MatchCard = ({
  team1Name,
  team1Image,
  team2Name,
  team2Image,
  date,
  time,
  stats,
  expanded,
   toggleExpansion
}) => {

  useEffect(()=>{team1Name,
    team1Image,
    team2Name,
    team2Image,
    date,
    time,
    stats},[stats])


  // Initialize counters for wins, losses, and draws
  let wins = 0;
  let losses = 0;
  let draws = 0;
  let equl = false;

  // Count the occurrences of each outcome
  stats.forEach((match) => {
    if (match.team1 > match.team2) {
      wins++;
    } else if (match.team1 < match.team2) {
      losses++;
    }  else {
      draws++;
    }
  });

  // Calculate percentages
  const totalMatches = wins + losses + draws;
  let winColor = 'green';
    let loseColor = 'red';
    let drawColor = 'yellow';

    // Calculate percentages
    const winPercentage = (wins / totalMatches) * 100;
    const losePercentage = (losses / totalMatches) * 100;
    const drawPercentage = (draws / totalMatches) * 100;

  if (winPercentage > losePercentage) {
    winColor = "green";
    loseColor = "red";
  } else if (winPercentage < losePercentage) {
    winColor = "red";
    loseColor = "green";
  }

  return (
    <>
  
  <View style={styles.mainContainer}>
    <View style={styles.wrapperContainer}>
        
        <View style={styles.container}>
          {/* First Section */}
          <View style={styles.section}>
            <View style={styles.teamContainer}>
              
              <Text numberOfLines={1} style={styles.text}>
                {team1Name}
              </Text>
              <TouchableOpacity onPress={toggleExpansion}>
              <Image source={team1Image} style={styles.image} />
              </TouchableOpacity>
            </View>
            
          </View>

          {/* Second Section */}
          <View style={[styles.section, styles.middleSection]}>
            <Text style={styles.vsText}>VS</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.time}>{time}</Text>
            </View>

            {/* Progress Bar Section */}
            <View style={styles.stats}>
              {/* First column - Win */}
              <View style={styles.column}>
                <Text style={{ color: Colors.WHITE, fontSize: 12 }}>{winPercentage.toFixed(2)}%</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: winColor,
                      width: `${winPercentage*1.5}%`,
                      height: 10,
                      marginRight: 5,
                      borderRadius: 19,
                    }}
                  />
                  
                </View>
              </View>
              {/* Second column - Draw */}
              <View style={styles.column}>
                <Text style={{ color: Colors.WHITE, fontSize: 12 }}> {drawPercentage.toFixed(2)}%</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: drawColor,
                      width: `${drawPercentage*1.5}%`,
                      height: 10,
                      marginRight: 5,
                      borderRadius: 19,
                    }}
                  />
                  
                </View>
              </View>
              {/* Third Colum */}
              <View style={styles.column}>
                <Text style={{ color: Colors.WHITE, fontSize: 12 }}>{losePercentage.toFixed(2)}%</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: loseColor,
                      width: `${losePercentage*1.5}%`,
                      height: 10,
                      marginRight: 5,
                      borderRadius: 19,
                    }}
                  />
                  
                </View>
              </View>
            </View>
          </View>

          

          {/* Third Section */}
          <View style={styles.section}>
            <Text numberOfLines={1} style={styles.otherteamtext}>
              {team2Name}
            </Text>
            <TouchableOpacity onPress={toggleExpansion}>
            <Image source={team2Image} style={styles.image} />
            </TouchableOpacity>
          </View>

          




          
        </View>
      
      </View>

      
      </View>
      {expanded && 


   
        <DropdownMenu/>

   }
  
</>
    



  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 10,
    padding: 6,
    margin: 10,
    gap: 60,
  },
  wrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expandedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor:Colors.LIGHT_GREY,
    borderColor:Colors.BLACK
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 10,
    padding: 6,
    margin: 10,
    gap: 70,
    width:'96%'
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
  text: {
    marginBottom: 20, // Add margin bottom for vertical space
    color: Colors.WHITE,
    fontSize: 12,
    width: 80,
    alignItems: "center",
  },

  otherteamtext: {
    marginBottom: 20, // Add margin bottom for vertical space
    color: Colors.WHITE,
    fontSize: 12,
    width: 100,
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
    height: 40,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Add space between date and time
    alignItems: "center",
    backgroundColor: "grey",
    color: "white",
    padding: 4,
    borderRadius: 89,
    width: 160,
    marginTop: 6, // Add margin top for vertical space
  },
  date: {
    color: "white",
    marginLeft: 4,
  },
  time: {
    color: "white",
    marginRight: 4,
  },

  stats: {
    gap: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 8, // Add margin top for vertical space
  },
  icon: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Add space between items
  },
  column: {
    alignItems: "center", // Center items vertically
  },
});

export default MatchCard;
