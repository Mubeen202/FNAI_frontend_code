import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, BackHandler,  } from "react-native";
import { launchCamera, launchImageLibrary } from 'expo-image-picker';
import Colors from "../Utils/Colors";
import { COLORS, images } from "./constants";
import { useNavigation } from '@react-navigation/native';
import { Entypo, Ionicons, MaterialIcons, EvilIcons, AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
export default function BgProfileImage() {
    // Inside your functional component
    useEffect(() => {
        const backAction = () => {
          alert('Hold on!', 'Are you sure you want to go back?', [
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
    const [modalVisibleProfile, setModalVisibleProfile] = useState(false);
    const [coverImageUri, setcoverImageUri] = useState(null);
    const [profileImageUri, setprofileImageUri] = useState(null);

    //Cover image controller 
  const handleCoverCameraPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        console.log('Camera permission is required to take a photo.');
        return;
    }

    let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [6, 4],
        quality: 1,
    });

    if (!result.canceled) {
        setcoverImageUri(result.assets[0].uri)
        setModalVisible(false);
    }
  };

  const handleCoverGalleryPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Gallery permission is required to select an image.')
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [6, 4],
        quality: 1,
      });
    

    if (!result.canceled) {
        setcoverImageUri(result.assets[0].uri)
        setModalVisible(false);
    }
  };

  const handleCoverRemovePress = () => {
    setcoverImageUri(null);
    setModalVisible(false);
  };

//Profile Image control
const handleProfileCameraPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        console.log('Camera permission is required to take a photo.');
        return;
    }

    let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
    });

    if (!result.canceled) {
        setprofileImageUri(result.assets[0].uri)
        setModalVisibleProfile(false);
    }
  };

  const handleProfileGalleryPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Gallery permission is required to select an image.')
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
    

    if (!result.canceled) {
        setprofileImageUri(result.assets[0].uri)
        setModalVisibleProfile(false);
    }
  };

  const handleProfileRemovePress = () => {
    setprofileImageUri(null);
    setModalVisibleProfile(false);
  };

  return (
    <>
    <View>
      {/* Section 1 */}
      
    {/* Background Image Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent={true} >
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonBack}>
            <AntDesign name="close" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Cover Image</Text>
        <View style={{flexDirection:'row', gap:10}}>
            <TouchableOpacity onPress={handleCoverCameraPress} style={styles.button}>
            <Ionicons name="camera-outline" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCoverGalleryPress} style={styles.button}>
            <MaterialIcons name="perm-media" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>
            {coverImageUri && (
            <TouchableOpacity onPress={handleCoverRemovePress} style={styles.button}>
                <EvilIcons name="trash" size={24} color={Colors.WHITE} />
                <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            )}
        </View>
        </View>
    </View>
    </Modal>


    {/* Profile Image Modal */}
    <Modal visible={modalVisibleProfile} animationType="slide" transparent={true} >
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={() => setModalVisibleProfile(false)} style={styles.buttonBack}>
            <AntDesign name="close" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Profile Image</Text>
        <View style={{flexDirection:'row', gap:10}}>
            <TouchableOpacity onPress={handleProfileCameraPress} style={styles.button}>
            <Ionicons name="camera-outline" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfileGalleryPress} style={styles.button}>
            <MaterialIcons name="perm-media" size={24} color={Colors.WHITE} />
            <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>
            {profileImageUri && (
            <TouchableOpacity onPress={handleProfileRemovePress} style={styles.button}>
                <EvilIcons name="trash" size={24} color={Colors.WHITE} />
                <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            )}
        </View>
        </View>
    </View>
    </Modal>


      {/* Foreground Image with Name */}
      <View style={styles.forgroundImage}>
  {/* Background Image */}
  
  {coverImageUri ? <Image source={{uri : coverImageUri}} alt="Cover Image" style={styles.backgroundImage} /> : <Image source={images.defaultCover} style={styles.backgroundImage} />}
  
  {/* Profile Image */}
  {profileImageUri ? <Image source={{uri : profileImageUri}} alt="Profile Image" style={styles.profileImage} /> : <Image source={images.profileDefault} style={styles.profileImage} />}
  
  
  {/* Change Cover Image Icon */}
  <TouchableOpacity onPress={() => setModalVisibleProfile(true)} style={styles.changeProfileImageIconContainer}>
  <Entypo name="camera" size={24} color={Colors.WHITE} />
  </TouchableOpacity>

  {/* Change Profile Image Icon */}
  <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.changeCoverImageIconContainer}>
  <Ionicons name="image-outline" size={24} color={Colors.WHITE} />
  </TouchableOpacity>

  {/* Text */}
  <Text style={styles.text}>Mobeen Sheikh</Text>
</View>


 
       
 
    </View>
    <View>
     
     </View>
     </>
  );
}

const styles = StyleSheet.create({
  
//   cameraIcon: {
//     marginLeft:300,
//     marginTop:-32,
//   },
forgroundImage: {
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginTop: -180, // Adjust this value as needed
  },
  changeProfileImageIconContainer: {
    position: 'absolute',
    top: 130, // Adjust this value to position the cover image icon vertically
    left: 196, // Adjust this value to position the cover image icon horizontally
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 999,
    padding: 8,
  },
  changeCoverImageIconContainer: {
    position: 'absolute',
    top: 154, // Adjust this value to position the profile image icon vertically
    right: 10, // Adjust this value to position the profile image icon horizontally
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 999,
    padding: 8,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 24,
    color: Colors.WHITE,
    textShadowColor: Colors.DARK_GREY,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  modalContainer: {
    marginTop:-40,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
//   text: {
//     fontWeight: "bold",
//     marginTop: 6,
//     fontSize: 24,
//     color: Colors.WHITE,
//     textShadowColor: Colors.DARK_GREY,
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 10,
//   },
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
    width:'32%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  
});
