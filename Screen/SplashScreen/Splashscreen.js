/* eslint-disable react/prop-types */
import { StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import { Video } from "expo-av";
import { useWindowDimensions } from "react-native";
import * as SecureStore from "expo-secure-store";
const Splashscreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  /**Logic For Existing User */
  const existUser = (id) => {
    if (id) {
      navigation.navigate("Watch");
    } else {
      navigation.navigate("Login");
    }
  };
  useMemo(
    () =>
      setTimeout(() => {
        SecureStore.getItemAsync("isExistingUser").then((data) => {
          existUser(data);
        });
      }, 6350),
    []
  );

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Video
        style={[styles.flexVedio, { width: width, height: height }]}
        source={require("../../assets/splash.mp4")}
        shouldPlay
        isLooping={false}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f5c842",
    alignItems: "center",
    justifyContent: "center",
  },
  flexVedio: {
    alignSelf: "center",
  },
});
