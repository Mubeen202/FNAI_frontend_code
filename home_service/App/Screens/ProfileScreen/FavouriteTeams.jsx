import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import icons, { fav_teams, icon } from './constants/icons';
import Colors from '../Utils/Colors';

export default function FavouriteTeams() {
    // Calculate the number of icons per row dynamically based on screen width
   const screenWidth = Dimensions.get('window').width;
   const iconsPerRow = Math.floor(screenWidth / 60); // Adjust 70 to your icon width + margin
   // Split fav_teams array into chunks based on iconsPerRow
   const chunkedIcons = [];
   for (let i = 0; i < fav_teams.length; i += iconsPerRow) {
     chunkedIcons.push(fav_teams.slice(i, i + iconsPerRow));
   }
   const [showAllIcons, setShowAllIcons] = useState(false);
  return (
    <>
    <View style={{ marginVertical: 10 }}>
          {showAllIcons ?
          <ScrollView >
          {chunkedIcons.map((row, rowIndex) => (
            <View key={rowIndex} style={{flexDirection: 'row', marginLeft: 4 , marginBottom: rowIndex !== chunkedIcons.length - 1 ? 10 : 0}}>
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
            </>
  )
}
