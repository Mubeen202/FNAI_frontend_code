import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../Utils/Colors';

const DropdownMenu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState(''); // State for selected winner

  const onCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  

  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.section}>
      <View style={styles.subContainer}>
      <Text style={styles.sectionText}>Draw</Text>
      
    </View>
        <View style={styles.subContainer}>
          <Text style={styles.sectionText}>Winner</Text>
          {/* Dropdown */}
         
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <Text style={styles.sectionText}>------Score------</Text>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
      </View>

      {/* Third Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.AIbuttonText}>Use AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:Colors.GREY,
    justifyContent: 'space-between',
    width:'96%',
    borderRadius: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
    color:Colors.WHITE,

  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 50,
    color:Colors.WHITE,
    backgroundColor:Colors.DARK_GREY
  },


  button: {
    backgroundColor: Colors.DARK_GREY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  AIbuttonText: {
    color: 'yellow',
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    width: 100,
    marginLeft: 10,
    color:Colors.WHITE
  },
});

export default DropdownMenu;
