
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from expo/vector-icons
import Colors from './Colors'; // Assuming you have a file defining colors

const Boards = () => {
  return (
    <View style={styles.container}>
      {/* Boards header */}
      <View style={styles.row}>
        {/* Left side columns */}
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.headerText}>POS</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.headerText}>Name</Text>
        </View>
        {/* Right side columns */}
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.headerText}>P</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.headerText}>Pts/P</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text style={styles.headerText}>Pts</Text>
        </View>
      </View>

      {/* Boards body */}
      {/* Add rows here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREEN,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_GREY,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DARK_GREY,
    paddingVertical: 10,
  },
  headerCell: {
    backgroundColor: Colors.DARK_GREY,
  },
  headerText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default Boards;
