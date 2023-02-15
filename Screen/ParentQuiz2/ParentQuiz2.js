import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ParentsStyle";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CustomButton from "../../Components/Button/CustomButton";
import FooterScreen from "../../Components/Footer/FooterScreen";
import KeypadScreen from "../../Components/Keypad/KeypadScreen";
import {  SafeAreaView } from "react-native-safe-area-context";
const ParentQuiz2 = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ImageBackground
        source={require("../../assets/BgImages/nativebg2.jpg")}
        resizeMode="cover"
        style={styles.backGroundImage}
      >
        <View style={styles.upperContainer}>
          <AntDesign
            name="left"
            size={25}
            color="blue"
            style={{ marginTop: 30, marginLeft: 10 }}
            onPress={() => navigation.navigate("Main")}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "blue",
              marginTop: 20,
              marginLeft: 70,
            }}
          >
            Quiz
          </Text>
          <MaterialCommunityIcons
            name="counter"
            size={27}
            color="blue"
            style={{ marginTop: 25 }}
          />
          <FontAwesome
            style={{ marginTop: 20, marginRight: 20 }}
            name="language"
            size={26}
            color="blue"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            marginTop: 20,
            color: "#1620db",
            fontWeight: "bold",
          }}
        >
          Parents Only
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginTop: 5,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Answer first to proceed
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: 60,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "black",
              fontWeight: "bold",
              margin: 30,
            }}
          >
            9 + 8 =
          </Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginTop: 5,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Change Question ?
            </Text>
            <TouchableOpacity >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  marginTop: 5,
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Refresh
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton textData={"Submit"} />
          <KeypadScreen />
          <FooterScreen />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ParentQuiz2;
// what is reduxtoolkit ?