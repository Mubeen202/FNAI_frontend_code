import { View, Text, StyleSheet,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../Utils/Colors';
import PremierMatchesData from './PremierMatchesData';

export default function PremierMatchesTable() {
    const [data, setData]= useState(PremierMatchesData)
    useEffect(()=>{
        setData(PremierMatchesData)
    },[data])

    // Calculate the width of the club cell dynamically based on the longest club name
  const calculateClubCellWidth = () => {
    let maxLength = 0;
    data.forEach(item => {
      if (item.club.length > maxLength) {
        maxLength = item.club.length;
      }
    });
    return maxLength * 0.1; // Adjust this multiplier as needed
  };

  return (
    <View style={styles.container}>
      {/* Table header */}
      <View style={styles.row}>
        {/* Left side columns */}
        <View style={[styles.leftCell, styles.headerCell]}>
          <Text style={styles.headerText}>POS</Text>
        </View>
       
        <View style={[styles.leftCell, styles.headerCell, ]}>
          <Text style={styles.headerText}>CLUB</Text>
        </View>

        {/* Right side columns */}
        <View style={[styles.rightCell, styles.headerCell]}>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
          <Text style={styles.headerText}>P</Text>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
          <Text style={styles.headerText}>W</Text>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
          <Text style={styles.headerText}>D</Text>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
          <Text style={styles.headerText}>L</Text>
        </View>
        <View style={[styles.rightCell, styles.headerCell]}>
          <Text style={styles.headerText}>Pts</Text>
        </View>
      </View>





     {/* Table body */}
         {/* Scrollable data section */}
      <ScrollView style={styles.scrollableContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.leftCell}>
              <Text style={styles.cellText}>{item.Pos}</Text>
            </View>
            <View style={[styles.leftCell, styles.iconCell]}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <View style={[styles.leftCell, { flex: calculateClubCellWidth() }]}>
              <Text numberOfLines={1} style={styles.cellTextName}>{item.club}</Text>
            </View>
            {/* <View style={styles.leftCell}>
            </View> */}
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.play}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.winning}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.draws}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.losses}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.pts}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
{/* 
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.cellText}>{item2.Pos}</Text>
        </View>
        <View style={[styles.leftCell, styles.iconCell]}>
          <Image source={item2.icon} style={styles.icon} />
          <Text numberOfLines={1} style={styles.cellTextName}>{item2.club}</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.cellText}>{item2.play}</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.cellText}>{item2.winning}</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.cellText}>{item2.draws}</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.cellText}>{item2.losses}</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.cellText}>{item2.pts}</Text>
        </View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.LIGHT_GREY,
      padding: 4,
      flex: 1,
      justifyContent: "space-between",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 2,
    },
    leftCell: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.DARK_GREY,
      paddingVertical: 4,
      paddingRight: 8,
      
    },
    rightCell: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.DARK_GREY,
      paddingVertical: 4,
      paddingLeft: 8,
    },
    headerCell: {
      backgroundColor: Colors.LIGHT_GREY,
      textAlign: 'left',
    },
    headerText: {
      color: Colors.WHITE,
    },
    cellText: {
      color: Colors.WHITE,
      fontSize: 12,
    },
    cellTextName: {
      color: Colors.WHITE,
      fontSize: 12,
      width: 138,
      paddingLeft: 6,
      paddingRight: 6,
    },
    iconCell: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 35,
    },
  });