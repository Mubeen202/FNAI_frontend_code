import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, BackHandler,  } from "react-native";
import { launchCamera, launchImageLibrary } from 'expo-image-picker';
import Colors from "../Utils/Colors";
import { images } from "./constants";
import { useNavigation } from '@react-navigation/native';
import { Entypo, Ionicons, MaterialIcons, EvilIcons} from '@expo/vector-icons';

export default function BgProfileImage() {
    // Inside your functional component
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);



    const [modalVisible, setModalVisible] = useState(false);
    const [imageUri, setImageUri] = useState(null);

  const handleCameraPress = async () => {
    const { cancelled, uri } = await launchCamera({
      mediaTypes: 'Images',
    });
    if (!cancelled) {
      setImageUri(uri);
      setModalVisible(false);
    }
  };

  const handleGalleryPress = async () => {
    const { cancelled, uri } = await launchImageLibrary({
      mediaTypes: 'Images',
    });
    if (!cancelled) {
      setImageUri(uri);
      setModalVisible(false);
    }
  };

  const handleRemovePress = () => {
    setImageUri(null);
    setModalVisible(false);
  };



  return (
    <View>
      {/* Section 1 */}
      

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile Image</Text>
            <View style={{flexDirection:'row', gap:10}}>
            <TouchableOpacity onPress={handleCameraPress} style={styles.button}>
            <Ionicons name="camera-outline" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleGalleryPress} style={styles.button}>
            <MaterialIcons name="perm-media" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Galary</Text>
                </TouchableOpacity>
                
            {imageUri && <TouchableOpacity onPress={handleRemovePress} style={styles.button}>
                <EvilIcons name="trash" size={24} color={Colors.WHITE} />
                <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>}

            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonClose}>
            <MaterialIcons name="close" color={Colors.WHITE} />
            <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>

          </View>
        </View>
      </Modal>

      {/* Foreground Image with Name */}
      <View style={styles.forgroundImage}>
        <Image source={images.white} style={styles.backgroundImage} />
        
        
        <Image source={images.profile} style={styles.profileImage} />
        <Text style={styles.text}>Mobeen Sheikh</Text>
      </View>

      <View style={styles.container}>
        {/* Background Image */}
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{borderRadius:44}}>
        <Entypo name="camera" size={28} style={styles.cameraIcon} color={Colors.LIGHT_GREY}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cameraIcon: {
    marginLeft:300,
    marginTop:-32,
  },
  modalContainer: {
    marginTop:-40,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
  },
  modalContent: {
    height: 300,
    width: '80%',
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color:Colors.WHITE
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  forgroundImage: {
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginTop: -180,
  },
  text: {
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 24,
    color: Colors.WHITE,
    textShadowColor: Colors.DARK_GREY,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    alignItems:"center"
  },
  buttonClose: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 30,
    alignItems:"center",
    width:'50%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
