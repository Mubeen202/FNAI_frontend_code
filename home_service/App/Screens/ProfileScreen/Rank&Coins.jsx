import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import icons from "./constants/icons";

export default function RankCoins() {
     // Adjust Coins
  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(3).replace(/\.?0*$/, '')  + "M";
    } else if (number >= 10000) {
      return (number / 1000).toFixed(3).replace(/\.?0*$/, '') + "K";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(3).replace(/\.?0*$/, '') + "K";
    } else {
      return number.toLocaleString();
    }
  }
  const coins = formatNumber(102934)
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
        {/* Text: Rank 543 */}
        <Text style={styles.rank_CoinsText}>Rank</Text>
        <Text style={styles.rankText}> 23 </Text>
        {/* Text Field: Coins: 239 */}
        <Text style={styles.rank_CoinsText}> Coins: </Text>
        <Text style={styles.coinsText}>{coins}</Text>
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
  rankContainer: { flexDirection: "row", alignItems: "center" },
  rank_CoinsText: { fontSize: 14, color: Colors.WHITE },
  rankText: { fontSize: 22, color: Colors.GREEN, marginTop: -4 },
  coinsText: {
    fontSize: 22,
    color: Colors.YELLOW,
    marginTop: -4,
    textAlign: "center",
  },
});
