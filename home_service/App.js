import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_bm92ZWwtcmFtLTY2LmNsZXJrLmFjY291bnRzLmRldiQ">
      {/* <SafeAreaView style={styles.container}> */}
        {/* if you sign in then this is page  */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* if you are sign out redirect to this page */}
        <SignedOut>
          <View style={styles.container}>
            <Login />
            <StatusBar style="auto" />
          </View>
        </SignedOut>
      {/* </SafeAreaView> */}
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffg",
    padding: 20,
  },
});
