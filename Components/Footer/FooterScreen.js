import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const FooterScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
      <TouchableOpacity onPress={() => navigation.navigate("Stories")}>
        <MaterialCommunityIcons
          style={styles.iconImage}
          name="message-text"
          size={26}
          color="#194792"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("VideoScreen")}>
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
