import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import {images } from "./constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { photos } from "./constants/data";
import Colors from "../Utils/Colors";
import icons, { fav_teams, icon } from './constants/icons';
import Chart from './Charts';


const ProfilePage = () => {
  const correctScore = 80
  const outComes = 68
  const incorrect = 67

  const total_predictoins= correctScore+outComes+incorrect;

  const pointsObtaing = (correctScore*20+outComes*5);

  const per_prediction = pointsObtaing / total_predictoins;

  const yellowPercentage = Math.round((outComes / total_predictoins) * 100);
  const redPercentage = Math.round((incorrect / total_predictoins) * 100);
  const greenPercentage = Math.round((correctScore / total_predictoins) * 100);

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
  const coins = formatNumber(100002090)





   // Calculate the number of icons per row dynamically based on screen width
   const screenWidth = Dimensions.get('window').width;
   const iconsPerRow = Math.floor(screenWidth / 60); // Adjust 70 to your icon width + margin
   // Split fav_teams array into chunks based on iconsPerRow
   const chunkedIcons = [];
   for (let i = 0; i < fav_teams.length; i += iconsPerRow) {
     chunkedIcons.push(fav_teams.slice(i, i + iconsPerRow));
   }
   const [showAllIcons, setShowAllIcons] = useState(false);
 //progress bar 
//  const yellowPercentages = Math.round(outComes / total_predictoins *100).toFixed(0).replace(/\.?0*$/, '')
//  const redPercentages = Math.round(incorrect / total_predictoins * 100 ).toFixed(0).replace(/\.?0*$/, '')
//  const greenPercentages = Math.round(correctScore / total_predictoins * 100).toFixed(0).replace(/\.?0*$/, '')




 
  return (
    <ScrollView >
      <View style={styles.container}>
      {/* First Card */}
      <View style={{ paddingHorizontal: 4, backgroundColor:Colors.DARK_GREY, borderRadius:19 }}>
        {/* Section 1 */}
        <View style={{ alignItems: 'center' }}>
          {/* Background Image */}
          <Image
            source={images.white}
            style={{ width: '100%', height: 200, borderRadius: 15}}
          />
          {/* Foreground Image with Name */}
          <View style={{ position: 'absolute', top: 100, alignItems: 'center', width: '100%' }}>
            <Image
              source={images.profile}
              style={{ width: 140, height: 140, borderRadius: 75, marginTop:-80 }}
            />
            <Text style={{ fontWeight: 'bold', marginTop: 6, fontSize:24, color:Colors.WHITE,
          textShadowColor: Colors.DARK_GREY,
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
          }}>Mobeen Sheikh</Text>
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
              <Text style={{ fontSize: 22, color: Colors.YELLOW, marginTop: -4, textAlign: 'center' }}>{coins}</Text> 
            </View>

        </View>

        {/* Section 4 */}
        <View style={{ marginVertical: 10 }}>
          {/* Progress Bar */}
          <View style={{ flexDirection: 'column', alignItems: 'center',  justifyContent: 'space-between', gap:10}}>
            {/* Progress Bar */}
            <View style={{ width: "100%", height: 20, backgroundColor: Colors.LIGHT_GREY, borderRadius: 8 }}>
              <View style={{ width: '50%', height: '100%', backgroundColor:Colors.GREEN, borderRadius: 8 }} />
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
          {showAllIcons ?
          <ScrollView >
          {chunkedIcons.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'row', marginLeft: 4, marginBottom: rowIndex !== chunkedIcons.length - 1 ? 10 : 0 }}>
              {row.map(icon => (
                <Image
                  key={icon.id}
                  source={icon.link}
                  style={{ width: 48, height: 60, marginHorizontal: 5 }}
                />
              ))}
            </View>
          ))}
        </ScrollView> :
        <ScrollView horizontal> 
        {chunkedIcons.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', marginLeft: 4 }}>
            {row.map(icon => (
              <Image
                key={icon.id}
                source={icon.link}
                style={{ width: 54, height: 70, marginHorizontal: 5 }}
              />
            ))}
          </View>
        ))}
      </ScrollView> }
           
            </View>

            {fav_teams.length >= 7  ? 
            <TouchableOpacity onPress={() => setShowAllIcons(!showAllIcons)}>
              <Text style={{ textAlign: 'center', marginTop: 8, color: Colors.WHITE, paddingBottom:16 }}>
                {showAllIcons ? 'Show less' : 'Show more'}
              </Text>
            </TouchableOpacity> 
            :
            ''
          }
            
        </View>


        
      

      {/* Second Card */}
      <View style={{ marginVertical: 10, paddingHorizontal: 4, backgroundColor:Colors.DARK_GREY, borderRadius:19,  }}>
        {/* Section 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <View style={{paddingLeft:8}}>
            <Text style={{alignItems:'center', paddingLeft:14, color:Colors.WHITE, fontSize:32}}>{total_predictoins}</Text>
            <Text style={{alignItems:'center',   color:Colors.WHITE, fontSize:16}}>Predictions</Text>
          </View>
          <View >
            <Text style={{alignItems:'center', paddingRight:4, color:Colors.WHITE, fontSize:32}}>{pointsObtaing}</Text>
            <Text style={{alignItems:'center',  paddingLeft:8, color:Colors.WHITE, fontSize:16}}>Points</Text>
          </View>
          <View >
            <Text style={{alignItems:'center', paddingLeft:20, color:Colors.WHITE, fontSize:32}}>{parseFloat(per_prediction.toFixed(2))}</Text>
            <Text style={{alignItems:'center',  color:Colors.WHITE, fontSize:16}}>Per Prediction</Text>
          </View>
        </View>

        {/* Section 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          {/* 6 Texts in Vertical */}
          <View style={{ paddingLeft: 10 }}>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.GREEN, fontSize: 32, textAlign: 'center' }}>{correctScore}</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 16, textAlign: 'center' }}>Correct Score</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.YELLOW, fontSize: 32, textAlign: 'center' }}>{outComes}</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 16, textAlign: 'center' }}>Correct Outcomes</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ color: Colors.RED, fontSize: 32, textAlign: 'center' }}>{incorrect}</Text>
              <Text style={{ color: Colors.WHITE, paddingLeft:4, fontSize: 16, textAlign: 'center' }}>Incorrect</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={{paddingRight:14}}>
          <Chart greenPercentage={greenPercentage} redPercentage={redPercentage} yellowPercentage={yellowPercentage} radius={100} innerRadius={80} />
          <Text style={{ color: Colors.GREEN, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:-150 }}> {greenPercentage}%</Text>
          <Text style={{ color: Colors.YELLOW, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:0 }}> {yellowPercentage}%</Text>
          <Text style={{ color: Colors.RED, paddingLeft:0, fontSize: 28, textAlign: 'center', marginTop:0 }}> {redPercentage}%</Text>
          

          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 4, // Adjust paddingTop as needed
    paddingBottom: 20, // Adjust paddingBottom as needed
    gap:-2,
    marginTop:20
  },
});

export default ProfilePage;
