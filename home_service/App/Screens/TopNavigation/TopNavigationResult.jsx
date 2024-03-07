import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

import Colors from "../Utils/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Premier from "./Premier/Premier";
import Laliga from "./Laliga/Laliga";
import Bundesliga from "./Bundesliga/Bundesliga";
import Serie from "./Serie_A/Serie";
import Ligue from "./Ligue_1/Ligue";
import PremierResult from "./Premier/PremierResult/PremierResult";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationResult() {
  // Inside your component or screen where you define the tab screen
  const focused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,

        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
        },
        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY,
          // borderTopLeftRadius: focused ? 29 : 0,
          // borderTopRightRadius: focused ? 29 : 0,
          // borderBottomRightRadius: focused ? 29 : 0,
          // borderBottomLeftRadius: focused ? 29 : 0,
          marginTop: 30,
        },
        // tabBarActiveBackgroundColor: Colors.LIGHT_GREY,
      }}
    >
      <Tab.Screen
        name="premier_result"
        options={{ tabBarLabel: "Premier" }}
        component={PremierResult}
      />
      <Tab.Screen
        name="laliga"
        options={{ tabBarLabel: "Laliga" }}
        component={Laliga}
      />
      <Tab.Screen
        name="bundesliga"
        options={{ tabBarLabel: "Bundesliga" }}
        component={Bundesliga}
      />
      <Tab.Screen
        name="serie"
        options={{ tabBarLabel: "Serie" }}
        component={Serie}
      />
      <Tab.Screen
        name="ligue"
        options={{ tabBarLabel: "Ligue" }}
        component={Ligue}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    color: Colors.WHITE,
    marginTop: 30,
  },
  text: {
    color: Colors.WHITE,
  },
});
