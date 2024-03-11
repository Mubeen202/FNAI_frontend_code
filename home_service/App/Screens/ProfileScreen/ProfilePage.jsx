import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {images } from "./constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { photos } from "./constants/data";
import Colors from "../Utils/Colors";
import icons, { fav_teams, icon } from './constants/icons';


const ProfilePage = () => {
  return (
    <ScrollView >
      {/* First Card */}
      <View style={{ paddingHorizontal: 4, backgroundColor:Colors.DARK_GREY, borderRadius:19 }}>
        {/* Section 1 */}
        <View style={{ alignItems: 'center' }}>
          {/* Background Image */}
          <Image
            source={images.cover}
            style={{ width: '100%', height: 200, borderRadius: 15}}
          />
          {/* Foreground Image with Name */}
          <View style={{ position: 'absolute', top: 100, alignItems: 'center', width: '100%' }}>
            <Image
              source={images.profile}
              style={{ width: 120, height: 120, borderRadius: 75, marginTop:-50 }}
            />
            <Text style={{ fontWeight: 'bold', marginTop: 2, fontSize:20, color:Colors.WHITE }}>Mobeen Sheikh</Text>
          </View>
        </View>

        {/* Section 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <View style={{paddingLeft:6 }}>
            <Text style={{ fontSize: 14, color: Colors.WHITE }}>Joined September 2020</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center',  paddingRight:4, marginTop: -4 }}>
            <Text style={{ fontSize: 19, color: Colors.WHITE }}>12 </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.WHITE }}>Following     </Text>
            <Text style={{ fontSize: 19, color: Colors.WHITE }}>2 </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.WHITE }}>Followers</Text>
          </View>
        </View>


        {/* Section 3 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            {/* Icons with Text */}
            <Text style={{ fontSize:12 , color: Colors.WHITE }}>0</Text>
            <Image
                  source={icons.trophy_yellow}
                  style={{ width: 20, height: 20, marginHorizontal: 5 }}
                />
            
            <Text style={{ fontSize: 12, color: Colors.WHITE }}>0</Text>
            <Image
                  source={icons.trophy_grey}
                  style={{ width: 20, height: 20, marginHorizontal: 5 }}
                />
            <Text style={{ fontSize: 12, color: Colors.WHITE }}>0</Text>
            <Image
                  source={icons.trophy_orange}
                  style={{ width: 20, height: 20, marginHorizontal: 5 }}
                />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Text: Rank 543 */}
              <Text style={{ fontSize: 14, color: Colors.WHITE }}>Rank</Text>
              <Text style={{ fontSize: 22, color: Colors.GREEN, marginTop: -4 }}> 23   </Text> 
              {/* Text Field: Coins: 239 */}
              <Text style={{ fontSize: 14, color: Colors.WHITE }}>                       Coins: </Text>
              <Text style={{ fontSize: 22, color: Colors.YELLOW, marginTop: -4 }}>239</Text> 
            </View>

        </View>

        {/* Section 4 */}
        <View style={{ marginVertical: 10 }}>
          {/* Progress Bar */}
          <View style={{ flexDirection: 'column', alignItems: 'center',  justifyContent: 'space-between', gap:10}}>
            {/* Progress Bar */}
            <View style={{ width: "100%", height: 20, backgroundColor: 'lightgray', borderRadius: 8 }}>
              <View style={{ width: '50%', height: '100%', backgroundColor: 'green', borderRadius: 8 }} />
            </View>

            {/* Icons Row */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Icons */}
              {icon.map((icon, index) => (
              <Image
                key={index} // Use a more descriptive key
                source={icon.link}
                style={{ width: 20, height: 20, marginHorizontal: 5 }}
              />
            ))}
            </View>
          </View>
        </View>





        {/* Section 5 */}
        <View style={{ marginVertical: 10 }}>
          <ScrollView horizontal>
            {/* Horizontal Scrollable Row of Icons */}
            {fav_teams.map(icon => (
              <Image
                key={icon.id}
                source={icon.link}
                style={{ width: 50, height: 60, marginHorizontal: 5 }}
              />
            ))}
          </ScrollView>
          <Text style={{ textAlign: 'center', marginTop: 10 , color:Colors.WHITE}}>Show more</Text>
        </View>


        
      </View>

      {/* Second Card */}
      <View style={{ marginVertical: 10, paddingHorizontal: 4, backgroundColor:Colors.LIGHT_GREY, borderRadius:19 }}>
        {/* Section 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <View>
            <Text>Points: 100</Text>
            <Text>Predictions: 267</Text>
          </View>
          <View>
            <Text>Points: 150</Text>
            <Text>Predictions: 300</Text>
          </View>
          <View>
            <Text>Points: 200</Text>
            <Text>Predictions: 350</Text>
          </View>
        </View>

        {/* Section 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          {/* 6 Texts in Vertical */}
          <View>
            <Text>Text 1</Text>
            <Text>Text 2</Text>
            <Text>Text 3</Text>
          </View>
          {/* Progress Bar */}
          <View>
            <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 5, borderColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
              <Text>70%</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default ProfilePage;
