import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import icons from "./constants/icons";
import CoinsPopup from "./CoinsPopUp";

export default function RankCoins() {
   
  const coins =156876
  return (
    <View style={styles.container}>
      <View style={styles.rankIconsConatiner}>
        {/* Icons with Text */}
        <Text style={styles.iconText}>0</Text>
        <Image source={icons.trophy_yellow} style={styles.iconImage} />

        <Text style={styles.iconText}>0</Text>
        <Image source={icons.trophy_grey} style={styles.iconImage} />
        <Text style={styles.iconText}>0</Text>
        <Image source={icons.trophy_orange} style={styles.iconImage} />
      </View>
      <View style={styles.rankContainer}>
        {/* Rank */}
        <View style={styles.rankItem}>
            <Text style={styles.rank_CoinsText}>Rank</Text>
            <Text style={styles.rankText}> 23 </Text>
        </View>
        {/* Coins */}
        <View style={styles.rankItem}>
            {/* <Text style={styles.rank_CoinsText}>Coins: </Text> */}
            <CoinsPopup coins={coins} />
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  rankIconsConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconText: { fontSize: 12, color: Colors.WHITE },
  iconImage: { width: 20, height: 20, marginHorizontal: 5 },
  rankContainer: { flexDirection: "row", alignItems: "center", gap:54 },
  rank_CoinsText: { fontSize: 14, color: Colors.WHITE },
  rankItem: { flexDirection: "row", alignItems: "center", marginRight: 10 },
  rankText: { fontSize: 22, color: Colors.GREEN, marginTop: -4 },
  
});
