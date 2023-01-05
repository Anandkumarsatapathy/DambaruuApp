import { View, Text, ImageBackground, FlatList, Image } from "react-native";
import React from "react";
import styles from "./PraentStyle";
import {
  
  FontAwesome5,
  FontAwesome,
  
} from "@expo/vector-icons";
import CardScreen from "../../Components/Card/CardScreen";
import CustomButton from "../../Components/Button/CustomButton";
import FooterScreen from "../../Components/Footer/FooterScreen";
import { SafeAreaView } from "react-native";
 import Data from "../../CardData/ParentData";
const PraentScreen = () => {
  console.log(Data);
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ImageBackground
        source={require("../../assets/BgImages/nativebg2.jpg")}
        resizeMode="cover"
        style={styles.backGroundimage}
      >
        <View style={styles.upperContainer}>
          <FontAwesome5
            style={{ marginTop: 20, marginLeft: 20 }}
            name="user-circle"
            size={27}
            color="red"
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "blue",
              marginTop: 20,
            }}
          >
            Parent
          </Text>
          <FontAwesome
            style={{ marginTop: 20, marginRight: 20 }}
            name="language"
            size={26}
            color="blue"
          />
        </View>
        <CardScreen />
        <Text
          style={{
            marginTop: 20,
            marginLeft: 30,
            fontSize: 25,
            fontWeight: "bold",
            color: "#c9b959",
          }}
        >
          Parent Zone
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, backgroundColor: "green" }}>
              <Text>b</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "blue" }}>
              <Text>c</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "red" }}>
              <Text>c</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PraentScreen;
