import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import PremierBoardData from "./PremierBoardData";
import {
  Entypo,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../../../Utils/Colors";

const PremierBoard = () => {
  const [data, setData] = useState(PremierBoardData);
  useEffect(() => {
    setData(PremierBoardData);
  }, [PremierBoardData]);
  return (
    <>
     <View style={styles.container}>
     
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
      <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.leftCell}>
            <Text style={styles.cellText}>{item.Pos}</Text>
          </View>
          <View style={[styles.leftCell, styles.iconCell]}>
            <Image source={item.icon} style={styles.icon} />
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
    </View></>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 4,
    flex: 1,
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
    paddingRight:12,
  },
  rightCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_GREY,
    paddingVertical: 4,
    paddingLeft:12,
  },
  headerCell: {
    backgroundColor: Colors.LIGHT_GREY,
    textAlign:'left'
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
});

export default PremierBoard;
