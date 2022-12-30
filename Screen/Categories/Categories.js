import { View, Text, Image, TextInput } from "react-native";
import { useState } from "react";
import styles from "./categorieStyle";
import cardData from "../../CardData/Carddata.js";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const CategoryScreenStyle = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.upperContainer}>
        <AntDesign name="left" size={27} color="blue" />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "blue" }}>
          Pick Categories
        </Text>
      </View>
      <View style={styles.middle_Container}>
        <View style={styles.flexCard}>
          {cardData.map((value, index) => {
            return (
              <View key={index} style={styles.flexcardContainer}>
                <View>
                  <Image
                    source={{ uri: value.images }}
                    style={styles.flexImage}
                  />
                </View>
                <View key={value.index} style={styles.flexcardText}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {value.game}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreenStyle;
