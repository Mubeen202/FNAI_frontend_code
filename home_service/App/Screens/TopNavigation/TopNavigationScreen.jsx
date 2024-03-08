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

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationScreen() {
  // Inside your component or screen where you define the tab screen
  const focused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarLabelStyle: {
          fontSize: 11,
          textTransform: "none",
          flexWrap: "nowrap", // Prevent label from wrapping to multiple lines
        },
        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY,
          marginTop: 30,
        },
      }}
    >
      <Tab.Screen
        name="premier"
        options={{ tabBarLabel: "Premier" }}
        component={Premier}
      />
      <Tab.Screen
        name="laliga"
        options={{ tabBarLabel: "Laliga" }}
        component={Laliga}
      />
      <Tab.Screen
        name="bundesliga"
        options={{ tabBarLabel: "Bundesliga",  }}
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

