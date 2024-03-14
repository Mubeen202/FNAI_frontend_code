import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function FollowFollowers() {
  return (
    <View style={styles.container}>
      <View style={{ paddingLeft: 6 }}>
        <Text style={{ fontSize: 14, color: Colors.WHITE }}>
          Joined September 2020
        </Text>
      </View>
      <View style={styles.follwer_following_container}>
        <Text style={styles.number_text}>12 </Text>
        <Text style={styles.followText}>Following </Text>
        <Text style={styles.number_text}>2 </Text>
        <Text style={styles.followText}>Followers</Text>
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
  follwer_following_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 4,
    marginTop: -4,
  },
  number_text: { fontSize: 19, color: Colors.WHITE },
  followText: { fontSize: 16, fontWeight: "bold", color: Colors.WHITE },
});
