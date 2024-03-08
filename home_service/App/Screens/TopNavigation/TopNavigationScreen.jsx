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
      }}
    >
      <Tab.Screen
        name="premier"
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.YELLOW : Colors.WHITE, fontSize: 14 }}>Premier</Text>
          ),
          tabBarStyle: {
            backgroundColor: Colors.DARK_GREY, // Set background color here
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.YELLOW, // Set primary color here
          },
         }}
        component={Premier}
      />
      <Tab.Screen
        name="laliga"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.YELLOW : Colors.WHITE, fontSize: 14 }}>Laliga</Text>
          ),
          tabBarStyle: {
            backgroundColor: Colors.DARK_GREY, // Set background color here
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.YELLOW, // Set primary color here
          },
         }}
        component={Laliga}
      />
      <Tab.Screen
        name="bundesliga"
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.YELLOW : Colors.WHITE, fontSize: 13 }}>Bundesliga</Text>
          ),
          tabBarStyle: {
            backgroundColor: Colors.DARK_GREY, // Set background color here
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.YELLOW, // Set primary color here
          },
        }}
        component={Bundesliga}
      />
      <Tab.Screen
        name="serie"
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.YELLOW : Colors.WHITE, fontSize: 14 }}>Serie</Text>
          ),
          tabBarStyle: {
            backgroundColor: Colors.DARK_GREY, // Set background color here
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.YELLOW, // Set primary color here
          },
        }}
        component={Serie}
      />
      <Tab.Screen
        name="ligue"
        options={{ 
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.YELLOW : Colors.WHITE, fontSize: 14 }}>Ligue</Text>
          ),
          tabBarStyle: {
            backgroundColor: Colors.DARK_GREY, // Set background color here
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.YELLOW, // Set primary color here
          },
         }}
        component={Ligue}
      />
    </Tab.Navigator>
  );
}

