import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import NavigationScreen from "./App/Screens/Navigation/NavigationScreen";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./App/Screens/Utils/Colors";
import TopNavigationScreen from "./App/Screens/TopNavigation/TopNavigationScreen";
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Black": require("./assets/static/Outfit-Black.ttf"),
    "Outfit-Bold": require("./assets/static/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("./assets/static/Outfit-ExtraBold.ttf"),
    // 'Outfit-ExtraLight': require('./assets/static/Outfit-ExtraLight.ttf'),
    // 'Outfit-Light': require('./assets/static/Outfit-Light.ttf'),
    "Outfit-Medium": require("./assets/static/Outfit-Medium.ttf"),
    "Outfit-Regular": require("./assets/static/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./assets/static/Outfit-SemiBold.ttf"),
    "Outfit-Thin": require("./assets/static/Outfit-Thin.ttf"),
  });
  return (
    // <ClerkProvider
    // tokenCache={tokenCache}
    //  publishableKey="pk_test_bm92ZWwtcmFtLTY2LmNsZXJrLmFjY291bnRzLmRldiQ"
    //  >
    //   {/* <SafeAreaView style={styles.container}> */}
    //     {/* if you sign in then this is page  */}
    //     <SignedIn >
    //       <NavigationContainer >
    //       <NavigationScreen/>
    //       </NavigationContainer>

    //     </SignedIn>
    //     {/* if you are sign out redirect to this page */}
    //     <SignedOut>
    //       <View style={styles.container}>
    //         <Login />
    //         <StatusBar style="auto" />
    //       </View>
    //     </SignedOut>
    //   {/* </SafeAreaView> */}
    // </ClerkProvider>
<View style={styles.container}>
    <NavigationContainer>
      <TopNavigationScreen />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
    padding: 10,
  },
});
