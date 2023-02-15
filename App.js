import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SplashScreen,
  Login,
  OTP,
  Watching,
  HomeScreen,
  Categories,
  EditProfile,
  ChildInfoVariant,
  Stories,
  VideoScreen,
  Festvideo,
  Subscription2,
  Activity,
  PolicyScreen,
  Contact,
  ChildInfo,
  Alphabat,
  Number,
} from "./Screen";
import Splashscreen from "./Screen/SplashScreen/Splashscreen";
import FooterScreen from "./Components/Footer";
import Footer from "./Components/Footer";
import Parentquiz from "./Screen/Parents2/Parents2";
import parent from "./Screen/Parents/ParentScreen";
import Logout from "./Screen/Logout/LogoutScreen";
import { useFonts, Schoolbell_400Regular } from "@expo-google-fonts/schoolbell";
import { usePreventScreenCapture } from "expo-screen-capture";
import colors from "./AppConfig/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  // usePreventScreenCapture();
  let [fontsLoaded] = useFonts({
    Schoolbell_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splashscreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splashscreen" component={Splashscreen} />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="Watch" component={Watching} />
          <Stack.Screen name="ChildInfoVariant" component={ChildInfoVariant} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Stories" component={Stories} />
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
          <Stack.Screen name="Festvdo" component={Festvideo} />
          <Stack.Screen name="Parentquiz" component={Parentquiz} />
          <Stack.Screen name="parent" component={parent} />
          <Stack.Screen name="Logout" component={Logout} />
          <Stack.Screen name="Subscription" component={Subscription2} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Alphabat" component={Alphabat} />
          <Stack.Screen name="Number" component={Number} />
          <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="ChildInfo" component={ChildInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
