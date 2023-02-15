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
const PolicyScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
   const [isAccepted, setIsAccepted] = useState(false);

   const handleAccept = () => {
     setIsAccepted(true);
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
            <View style={{ alignItems: "center", marginTop: 50 }}>
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
              <ScrollView>
                <Image
                  source={require("../../assets/bunny.png")}
                  style={styles.logo}
                />
                <Text style={styles.header}>
                  Welcome to the "Little Learners" Preschool Learning
                  Application
                </Text>
                <Text style={styles.paragraph}>
                  By using the Application, you agree to be bound by these terms
                  and conditions (the "Terms"). If you do not agree to these
                  Terms, please do not use the Application.
                </Text>
                <Text style={styles.paragraph}>
                  The Application is intended for use by preschoolers and their
                  parents or guardians. We grant you a limited, non-exclusive,
                  non-transferable license to use the Application on any device
                  that you own or control, solely for your personal,
                  non-commercial use. Any commercial use of the Application is
                  strictly prohibited.
                </Text>
                <Text style={styles.paragraph}>
                  The Application contains content that is protected by
                  copyright, trademark, and other intellectual property laws. We
                  own or have a license to use all intellectual property rights
                  in and to the Application. You may not copy, modify,
                  distribute, sell, or transfer any content from the Application
                  without our prior written consent.
                </Text>
                <Text style={styles.paragraph}>
                  The Application may allow you to submit or post content,
                  including but not limited to, comments, images, and videos
                  (“User-Generated Content”). You are solely responsible for
                  your User-Generated Content and the consequences of posting or
                  publishing it. By posting User-Generated Content, you
                  represent and warrant that: (i) you own or have the necessary
                  rights and permissions to use and authorize us to use all
                  patent, trademark, trade secret, copyright or other
                  proprietary rights in and to any and all User-Generated
                  Content to enable inclusion and use of the User-Generated
                  Content in the manner contemplated by the Application and
                  these Terms; (ii) your User-Generated Content does not violate
                  any third-party rights, including but not limited to,
                  intellectual property rights and privacy rights; and (iii)
                  your User-Generated Content complies with these Terms and all
                  applicable laws.
                </Text>
                <Text style={styles.paragraph}>
                  We respect your privacy and are committed to protecting it.
                  Please refer to our privacy policy for information on how we
                  collect, use, and protect your personal information.
                </Text>
                <Text style={styles.paragraph}>
                  The Application is provided on an "as is" and "as available"
                  basis, and we make no representations or warranties of any
                  kind, express or implied, as to the operation of the
                  Application or the information, content, materials, or
                  products
                </Text>
              </ScrollView>
              {!isAccepted && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.acceptButton}
                    onPress={handleAccept}
                  >
                    <Text style={styles.acceptButtonText}>I Agree</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <DropdownAlert />
      </SafeAreaView>
    </>
  );
};
export default PolicyScreen;
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
  logo: {
    alignSelf: "center",
    width: 200,
    height: 60,
    resizeMode: "contain",
    marginVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 4,
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
