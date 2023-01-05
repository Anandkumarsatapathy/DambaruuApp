import React from "react";
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
  
} from "./Screen";
import Splashscreen from "./Screen/SplashScreen/Splashscreen";
import FooterScreen from "./Components/Footer";
import Footer from "./Components/Footer";
import Parentquiz from "./Screen/Parents2/Parents2";
import parent from "./Screen/Parents/ParentScreen";
import Logout from "./Screen/Logout/LogoutScreen";
import { useFonts, Schoolbell_400Regular } from "@expo-google-fonts/schoolbell";
const Stack = createNativeStackNavigator();
export default function App() {

    let [fontsLoaded] = useFonts({
      Schoolbell_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    <SafeAreaProvider>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
