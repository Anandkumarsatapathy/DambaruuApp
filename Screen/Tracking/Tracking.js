import { View, Image, Text,ScrollView } from "react-native";
import React from "react";
import styles from "./TrackingStyle.js";
import cardData from "../../CardData/UserData";
import { AntDesign } from "@expo/vector-icons"
import CustomButton from "../../Components/Button/CustomButton.js";
const Tracking = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.upperContainer}>
        <AntDesign name="left" size={27} color="blue" />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "blue" }}>
          Tracing
        </Text>
      </View>
      <View style={styles.middle_Container}>
        <ScrollView vertical={true}>
          {cardData.map((value, index) => {
            return (
              <View key={index} style={styles.flexCard}>
                <Image
                  source={{ uri: value.images }}
                  style={styles.flexImage}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <CustomButton textData={"Play"} />
    </View>
  );
};

export default Tracking;
