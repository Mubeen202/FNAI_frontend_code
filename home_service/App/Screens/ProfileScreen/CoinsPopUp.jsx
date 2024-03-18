import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';
import { FontAwesome5, AntDesign, Ionicons} from '@expo/vector-icons';
export default function CoinsPopup({ coins }) {
  const [modalVisible, setModalVisible] = useState(false);
  //Adjust coins 
  function formatNumber(number) {
    if (number < 1000) {
      return number.toLocaleString();
    } else if (number < 1000000) {
      const kValue = Math.floor(number / 1000);
      const remainder = number % 1000;
      if (remainder === 0) {
        return kValue + "K+";
      } else if (remainder < 500) {
        return kValue + "K+";
      } else if (remainder >= 500 && remainder < 1000) {
        return (kValue + 0.5) + "K+";
      }
    } else if (number < 1000000000) {
      const mValue = Math.floor(number / 1000000);
      const remainder = number % 1000000;
      if (remainder === 0) {
        return mValue + "M+";
      } else if (remainder < 500000) {
        return mValue + "M+";
      } else if (remainder >= 500000 && remainder < 1000000) {
        return (mValue + 0.5) + "M+";
      }
    } else {
      const bValue = Math.floor(number / 1000000000);
      const remainder = number % 1000000000;
      if (remainder === 0) {
        return bValue + "B+";
      } else if (remainder < 500000000) {
        return bValue + "B+";
      } else if (remainder >= 500000000 && remainder < 1000000000) {
        return (bValue + 0.5) + "B+";
      }
    }
  }
  //Number with comas 
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  return (
    <View >
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.coinsContainer}>
       <FontAwesome5 name="bitcoin" size={24} style={styles.coinsIcon} />
        <Text style={styles.coinsText}>{formatNumber(coins)}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ marginTop:-40,
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
                        <View style={styles.modalContent}>
          {/* Display all the coins here */}
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonBack}>
          <AntDesign name="close" size={24} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>All Coins</Text>
          
          <View style={{flexDirection:'row', gap:10}}>
            <TouchableOpacity  style={styles.button}>
            <FontAwesome5 name="bitcoin" size={24} color={Colors.GOLD} />
            <Text style={styles.buttonText}>{numberWithCommas(coins)}</Text>
           </TouchableOpacity>
        </View>
          </View>

        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    coinsContainer: { flexDirection: "row", alignItems: "center", gap:4},
    coinsText: {
        fontSize: 18,
        color: Colors.GOLD,
        marginTop: -4,
        textAlign: "center",
      },
      coinsIcon: {
        color: Colors.GOLD,
        marginTop: -6,
        textAlign: "center",
      },
      modalContent: {
        height: 200,
        width: '80%',
        backgroundColor: Colors.DARK_GREY,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonBack: {
        position: 'absolute',
        top: 4,
        left: 244,
        zIndex: 1,
        backgroundColor: Colors.LIGHT_GREY,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 99,
        alignContent:'center'
      },
      modalTitle: {
        fontSize: 20,
        marginBottom: 20,
        color:Colors.WHITE
      },
      button: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 15,
        marginTop: 10,
        alignItems:"center"
      },
      buttonText: {
        color: Colors.WHITE,
        fontSize: 16,
      },
  });