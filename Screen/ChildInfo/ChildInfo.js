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
  ToastAndroid,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { createContext, useState, useEffect } from "react";
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

  const [language, setLanguage] = useState("English");
  const [preferedlanguage, setPreferedlanguage] = useState("English");
  const [learingDisability, setLearingDisability] = useState("No");
  const [message, setMessage] = useState("");
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  /**Extrac the Child Data */
  useEffect(() => {
    SecureStore.getItemAsync("data").then((value) => {
      const object = JSON.parse(value);
      setChildName(object.stdName);
    });
  }, []);

  const handleSubmit = () => {
    client
      .post("/user/childinfo", {
        name: childName,
        role_id: 4,
        father_name: parentName,
        mother_tongue: language,
        language_comfortable_with: preferedlanguage,
        learning_disability: learingDisability,
        learning_domain: message,
      })
      .then((response) => {
        if (response.data) {
          ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image source={image.logoTxt} style={{ resizeMode: "contain" }} />
            <Image
              source={image.sub_logoTxt}
              style={{ width: 90, resizeMode: "contain" }}
            />
          </View>

          <View style={styles.subView}>
            <Text style={styles.textContainer}>⭐ Your Child Info ⭐</Text>
            <View>
              <TextInput style={styles.input} placeholder={childName} />
              <TextInput
                style={styles.input}
                placeholder="Parent Name"
                value={parentName}
                onChangeText={(text) => setParentName(text)}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...Font.fs18 }}>Select Language:</Text>
                <Picker
                  selectedValue={language}
                  style={{
                    height: 50,
                    width: 150,
                  }}
                  onValueChange={(itemValue) => setLanguage(itemValue)}
                >
                  <Picker.Item label="Odia" value="Odia" />
                  <Picker.Item label="English" value="English" />
                </Picker>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...Font.fs18 }}>Prefered Language:</Text>
                <Picker
                  selectedValue={preferedlanguage}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue) => setPreferedlanguage(itemValue)}
                >
                  <Picker.Item label="Odia" value="Odia" />
                  <Picker.Item label="English" value="English" />
                </Picker>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...Font.fs18 }}>Learing with Disability:</Text>
                <Picker
                  selectedValue={learingDisability}
                  style={{ height: 50, width: 150, ...Font.fs18 }}
                  onValueChange={(itemValue) => setLearingDisability(itemValue)}
                >
                  <Picker.Item label="Yes" value="Yes" />
                  <Picker.Item label="No" value="No" />
                </Picker>
              </View>

              <TextInput
                style={{
                  height: 100,
                  borderColor: "white",
                  borderRadius: 8,
                  backgroundColor: Color.inputBGColor,
                  borderWidth: 1,
                  ...Font.fs18,
                  padding: 10,
                  width: width / 1.24,
                  marginLeft: -1,
                }}
                placeholder="Enter message here..."
                onChangeText={(text) => setMessage(text)}
                value={message}
                multiline={true}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: "#194792",
                  padding: 10,
                  alignItems: "center",
                  width: width / 1.24,
                  marginTop: 40,
                  borderRadius: 8,
                }}
                onPress={handleSubmit}
              >
                <Text style={{ color: "white", ...Font.fs22M }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

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
    padding: 30,
    height: height / 1.2,
    marginTop: 30,
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
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 8,
    padding: 10,
    flexDirection: "row",
    backgroundColor: Color.inputBGColor,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
    ...Font.fs18,
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
