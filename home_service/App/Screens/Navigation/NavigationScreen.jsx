import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import BookingScreen from "../BookingScreen/BookingScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';
import Colors from "../Utils/Colors";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily:'Outfit-Medium' }}>Home</Text>
          
        ),

        tabBarIcon: ({ color, size }) => (
            <Entypo  name="home" size={24} color={Colors.PRIMARY}  />
            
          ),
      }}
    />
    <Tab.Screen name="booking" component={BookingScreen} 
    options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily:'Outfit-Medium' }}>Booking</Text>

        ),
        tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={24} color={Colors.PRIMARY}  />
            
          ),
      }}
      
    />
    <Tab.Screen name="profile" component={ProfileScreen} 
    options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily:'Outfit-Medium' }}>Profile</Text>
        ),
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" size={24} color={Colors.PRIMARY}  />
            
          ),
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
