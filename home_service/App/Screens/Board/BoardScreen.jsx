import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import BoardData from "./BoardData";
import Colors from "../Utils/Colors";
import { SvgXml } from 'react-native-svg';
import {
  Entypo,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const Boards = () => {
  const [data, setData] = useState(BoardData);
  useEffect(() => {
    setData(BoardData);
  }, []);

  return (
    <View style={styles.container}>
      {/* First section: Bold text centered */}
      <View style={styles.centered}>
        <Text style={styles.bold}>Week 20 - Week 23</Text>
      </View>

     
        {/* Table header */}
        <View style={styles.row}>
          {/* Left side columns */}
          <View style={[styles.leftCell, styles.headerCell]}>
            <Text style={styles.headerText}>POS</Text>
          </View>
          <View style={[styles.leftCell, styles.headerCell]}>
            <Text style={styles.headerText}></Text>
          </View>
          <View style={[styles.leftCell, styles.headerCell]}>
            <Text style={styles.headerText}>Name</Text>
          </View>

          {/* Right side columns */}
          <View style={[styles.rightCell, styles.headerCell]}>
            <Text style={styles.headerText}>P</Text>
          </View>
          <View style={[styles.rightCell, styles.headerCell]}>
            <Text style={styles.headerText}>Pts/P</Text>
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
              
              {/* <SvgXml xml={item.icon} style={styles.icon}/> */}
            </View>
            <View style={styles.leftCell}>
              <Text style={styles.cellText}>{item.name}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.p_}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.pts_p}</Text>
            </View>
            <View style={styles.rightCell}>
              <Text style={styles.cellText}>{item.pts}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 4,
    flex: 1,
  },
  centered: {
    // alignItems: 'center',
    // marginBottom: 12,
    // paddingTop: 10,
    // marginTop:20,
    // backgroundColor:Colors.DARK_GREY
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    paddingTop: 10,
    marginTop: 20,
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 29,
    width: '100%', // Adjust width as needed
    height: 60, // Adjust height as needed
    paddingBottom:20
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.WHITE,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    padding: 2,
  },
  leftCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_GREY,
    paddingVertical: 4,
    paddingRight: 12,
  },
  rightCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_GREY,
    paddingVertical: 4,
    paddingLeft: 12,
  },
  headerCell: {
    backgroundColor: Colors.LIGHT_GREY,
    textAlign: 'left'
  },
  headerText: {
    color: Colors.WHITE,
  },
  cellText: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  iconCell: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  scrollableContainer: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
  },
});

export default Boards;
