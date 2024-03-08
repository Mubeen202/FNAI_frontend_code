import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Foundation,
  MaterialIcons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import UpNext from "../UpNext/UpNext";
import BoardScreen from "../Board/BoardScreen";
import ResultScreen from "../Results/ResultScreen";
import TableScreen from "../Table/TableScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="up_next"
      component={UpNext}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Up Next</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="navigate-next" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

    <Tab.Screen
      name="result"
      component={ResultScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Results</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <Foundation name="results" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

    
<Tab.Screen
      name="table"
      component={TableScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Table</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="table" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

    <Tab.Screen
      name="board"
      component={BoardScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Leaderboard</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="leaderboard" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Profile</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

   
  </Tab.Navigator>
);

export default function NavigationScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}
