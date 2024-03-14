import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { images } from "./constants";
import Colors from "../Utils/Colors";

export default function BgProfileImage() {
  return (
    <View>
      {/* Section 1 */}
      <View style={styles.container}>
        {/* Background Image */}
        <Image source={images.white} style={styles.backgroundImage} />
        {/* Foreground Image with Name */}
        <View style={styles.forgroundImage}>
          <Image source={images.profile} style={styles.profileImage} />
          <Text style={styles.text}>Mobeen Sheikh</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  forgroundImage: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginTop: -80,
  },
  text: {
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 24,
    color: Colors.WHITE,
    textShadowColor: Colors.DARK_GREY,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
