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
const Login = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [mobile, setMobile] = useState(""); // Intial mobinumber"
  const [mobileno, setMobileno] = useState(""); //after Check Mobile number
  /*Fonts*/
  // let [fontsLoaded] = useFonts({
  //   Schoolbell_400Regular,
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }
  /* validation of mobile No */
  const submitNo = (mobile) => {
    const phoneno = /^\d{10}$/;
    console.log(mobile);
    if (phoneno.test(mobile)) {
      setMobileno(mobile);
      return true;
    } else {
      console.log("Please Enter the Correct Number");
      return false;
    }
  };
  /* Post Request of mobile No */
  //   const handleNo = ()=>{
  //     const checkNo = submitNo(mobile);
  //     if (!checkNo) {
  //       user_login({
  //         mobile:mobileno
  //       })
  //         .then((result) => {
  //           if (result.status == 200) {
  //            navigation.navigate("OTP");
  //           }
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     } else {
  //       console.log("Please Enter the valid Number ");
  //     }
  //  }

  // Context Provide

  // return(
  //   <mobile_Number.Provider value={mobile}>

  //   {/* <ChildInfoVariant/> */}
  //  </mobile_Number.Provider>
  // )

  /* Temp post operation */
  const handleSubmitNo = async () => {
    client
      .post("/user/generate-otp/", {
        mobile_number: mobile,
      })
      .then((response) => {
        if (response?.data?.status === "success") {
          let tanXid = response?.data?.txn_id;
          SecureStore.setItemAsync("TxnId", tanXid.toString());
          SecureStore.setItemAsync("mobileNumber", mobile);
          navigation.navigate("OTP", { txnID: response?.data?.txn_id });
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
              <Text style={styles.normalText}>Enter your</Text>
              <Text style={styles.normalText}>Mobile Number</Text>
              <Text style={styles.grayText}>
                We will send you a confirmation code
              </Text>
              <View style={styles.inputView}>
                <View style={styles.flagView}>
                  <Image source={image.flag} style={styles.flag} />
                </View>
                <TextInput
                  keyboardType="phone-pad"
                  style={styles.inputStyle}
                  onChangeText={(text) => setMobile(text)}
                  value={mobile}
                  maxLength={10}
                />
              </View>
              <View style={cs.ac}>
                <TouchableOpacity style={cs.commonBtn} onPress={handleSubmitNo}>
                  <Text style={cs.commonBtnText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <DropdownAlert />
      </SafeAreaView>
    </>
  );
};
export default Login;
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
     fontSize:22,
    height: 45,
    color: Color.inputTextColor,
    ...cs.flex,
  },
  girlImgView: {
    marginTop: height / 20,
    ...cs.ac,
  },
});
