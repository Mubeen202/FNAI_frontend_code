import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

const DropdownMenu = ({ onUseAI, onConfirm }) => {
  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.section}>
        <Text style={styles.sectionText}>Section 1</Text>
        {/* Checkbox goes here */}
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        {/* Input fields go here */}
      </View>

      {/* Third Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={onUseAI}>
          <Text style={styles.buttonText}>Use AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 10,
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: 14,
  },
});

export default DropdownMenu;
