/* eslint-disable react/prop-types */
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React, { createContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import ChildInfoVariant from "../ChildInfoVariant/ChildInfoVariant.js";
import DropdownAlert from "react-native-dropdownalert";
import client from "../../Utils/Api";
import * as SecureStore from "expo-secure-store";
import { StyleSheet, Dimensions } from "react-native";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
const { width, height } = Dimensions.get("window");
import { useFonts, Schoolbell_400Regular } from "@expo-google-fonts/schoolbell";

// eslint-disable-next-line react/prop-types
const Contact = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // code to handle form submission
  };
  



  return (
    <>
      <SafeAreaView style={styles.mainView}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0) 97.41%)",
          ]}
          style={styles.gradientCircle}
        ></LinearGradient>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : height}
        >
          <ScrollView contentContainerStyle={{}}>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Image source={image.logoTxt} style={{ resizeMode: "contain" }} />
              <Image
                source={image.sub_logoTxt}
                style={{ width: 90, resizeMode: "contain" }}
              />
            </View>
            <View style={styles.girlImgView}>
              <Image
                source={image.login_img}
                style={{ resizeMode: "contain", height: 200 }}
              />
            </View>
            <View style={styles.subView}>
              <View style={styles.container}>
                <Image
                  source={require("../../assets/bunny.png")}
                  style={styles.image}
                />
                <Text style={styles.header}>Contact Us</Text>
                <View style={styles.formContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Message"
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    multiline={true}
                    numberOfLines={4}
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <DropdownAlert />
      </SafeAreaView>
    </>
  );
};
export default Contact;
const styles = StyleSheet.create({
  mainView: {
    ...cs.flex,
    backgroundColor: Color.themeColor,
  },
  gradientCircle: {
    position: "absolute",
    width: 385,
    height: 385,
    left: 67,
    top: -66,
    borderRadius: 200.5,
  },
  normalText: {
    fontSize: 25,

    fontFamily: "Schoolbell_400Regular",

    color: Color.blueColor,
    letterSpacing: 1,
  },
  boldText: {
    fontFamily: "Schoolbell_400Regular",
    fontSize: 25,
    fontWeight: "bold",
    color: Color.blueColor,
    letterSpacing: 1,
    lineHeight: 40,
  },
  grayText: {
    fontFamily: "Schoolbell_400Regular",
    fontSize: 19,
    color: Color.grayColor,
  },
  subView: {
    ...cs.flex,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: height / 1.7,
    marginTop: -30,
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: Color.inputBGColor,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  flagView: {
    width: 26,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    resizeMode: "contain",
    width: 42,
    height: 41,
  },
  inputStyle: {
    paddingHorizontal: 15,
    fontFamily: "Schoolbell_400Regular",
    fontSize: 22,
    height: 45,
    color: Color.inputTextColor,
    ...cs.flex,
  },
  girlImgView: {
    marginTop: height / 20,
    ...cs.ac,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "orange",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
