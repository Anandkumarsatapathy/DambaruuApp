import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import styles from "./SubsciptionStyle";
import CardScreen from "../../Components/Card/CardScreen";
import CustomButton from "../../Components/Button/CustomButton";
import FooterScreen from "../../Components/Footer/FooterScreen";
import { SafeAreaView } from "react-native-safe-area-context";
const SubsciptionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Logotext.png")}
        style={{ width: 250, height: 50, alignSelf: "center", marginTop: 50 }}
      />
      <View style={styles.flexContainer}>
        <ImageBackground
          source={require("../../assets/BgImages/nativebg2.jpg")}
          resizeMode="cover"
          style={styles.backGroundimage}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              marginTop: 20,
              color: "#1620db",
              fontWeight: "bold",
            }}
          >
            ⭐ Subsciption ⭐
          </Text>
          <Text
            style={{
              marginTop: 30,
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              marginLeft: 30,
            }}
          >
            Choose Your Plan
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "black",
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 30,
            }}
          >
            Or try 1 week free
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <CardScreen />
            <CardScreen />
          </View>
          <View style={{ marginTop: 230 }}>
            <CustomButton textData={"Choose Plan"} />
            <FooterScreen />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default SubsciptionScreen;
