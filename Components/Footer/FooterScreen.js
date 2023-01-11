import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
const FooterScreen = () => {
  const [data, setData] = useState([]);
  console.log("Footerdata:-", data);
  useEffect(() => {
    SecureStore.getItemAsync("data").then((value) => {
      const object = JSON.parse(value);
      setData(object);
    });
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home", {
            ageGroup: data.standard,
            stdName: data.stdName,
            toked: data.token,
            proAvatar: data.profile_picture,
          })
        }
      >
        <FontAwesome5
          style={styles.iconImage}
          name="home"
          size={26}
          color="#194792"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Parentquiz")}>
        <Ionicons
          style={styles.iconImage}
          name="people"
          size={26}
          color="#194792"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
        <MaterialCommunityIcons
          style={styles.iconImage}
          name="message-text"
          size={26}
          color="#194792"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Subscription")}>
        <Entypo
          style={styles.iconImage}
          name="folder-video"
          size={26}
          color="#194792"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    marginTop: 0.3,
    backgroundColor: "#e8c309",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // iconImage: {
  //   marginTop: 10,
  //   marginRight: 30,
  //   marginLeft: 40,
  // },
});
