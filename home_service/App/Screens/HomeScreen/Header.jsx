import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../Utils/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSectionContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={styles.profileImage}
            />
            <View style={styles.innerContainer}>
              <Text style={{ color: Colors.WHITE, fontSize: 12, fontFamily:'Outfit-Medium' }}>
                Welcome{" "}
              </Text>
              <Text style={{ color: Colors.WHITE, fontSize: 18, fontFamily:'Outfit-Bold' }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View>
            <FontAwesome5
              name="bookmark"
              size={24}
              color={Colors.WHITE}
              marginTop={54}
            />
          </View>
        </View>
        {/* Search Bar Section */}

        <View style={styles.searchBarSectionContainer}>
          <TextInput placeholder="Search Input" style={styles.textInput} fontFamily='Outfit-Regular' />
          <TouchableOpacity
            onPress={() => {
              console.log("button press");
            }}
          >
            <FontAwesome5 name="search"    size={18} style={styles.searchButton}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileSectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    marginTop: 50,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 99,
    marginTop: 50,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchButton: {
 
    color: Colors.PRIMARY,
    padding: 10,
    marginTop:-2,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    alignItems: "center",
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    padding: 7,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "85%",
    height: "80%",
    fontSize:16
  },
  searchBarSectionContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop:20
  },
});
