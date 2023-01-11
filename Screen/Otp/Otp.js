import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import KeypadScreen from "../../Components/Keypad/KeypadScreen.js";
import client from "../../Utils/Api";
import DropdownAlert from "react-native-dropdownalert";
import { StyleSheet, Dimensions } from "react-native";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
import * as SecureStore from "expo-secure-store";
const { width, height } = Dimensions.get("window");
const OTP = ({ navigation, route }) => {
  const { txnID } = route.params;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [OTP, setOTP] = useState("");
  /* Validation  OTP Field  */
  const isObjValid = (obj) => {
    return Object.values(obj).every((value) => value.trim());
  };
  /* Validation Logic of OTP */
  const submitOTP = (otp) => {
    if (isObjValid(otp)) {
      let val = "";
      Object.values(otp).forEach((v) => {
        val += v;
      });
      // setOTP(val);
      // return true;
      return val;
    } else {
      // console.log("Enter the correct OTP");
      return false;
    }
  };
  /* Post Otp Logic */
  // const handleOtp = ()=>{
  //    const checkOTP = submitOTP(otp);
  //    if (!checkOTP) {
  //      user_login({
  //        otp:OTP
  //      })
  //        .then((result) => {
  //          if (result.status == 200) {
  //           navigation.navigate("Watch");
  //          }
  //        })
  //        .catch((err) => {
  //          console.error(err);
  //        });
  //    } else {
  //      console.log("Please Put pop OTP");
  //    }
  // }
  /* OTP Validation Logic */
  const handleSubmitOTP = () => {
    const ans = submitOTP(otp);
    client
      .post("/user/confirm-otp/", {
        txn_id: txnID,
        otp: ans,
      })

      .then((response) => {
        if (response.data.status === "success") {
          SecureStore.setItemAsync("isExistingUser", "true");
          navigation.navigate("Watch", { tokenId: txnID });
        } else {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <SafeAreaView style={styles.mainView}>
        {/* Image Container */}
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0) 97.41%)",
          ]}
          style={styles.gradientCircle}
        ></LinearGradient>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={[cs.flex, cs.jc]}
        >
          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <Image source={image.logoTxt} style={{ resizeMode: "contain" }} />
              <Image
                source={image.sub_logoTxt}
                style={{ width: 90, resizeMode: "contain" }}
              />
            </View>
            <View style={styles.girlImgView}>
              <Image
                source={image.otp_img}
                style={{ resizeMode: "contain", height: 200 }}
              />
            </View>
            <View style={styles.subView}>
              <Text style={styles.normalText}>Enter your OTP</Text>
             
              <Text style={styles.grayText}>
                4 digit OTP sent to your mobile number
              </Text>
              <View
                style={{
                  flex: 0.4,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  style={styles.input}
                  keyboardType="decimal-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={(text) => {
                    const re = /^[0-9\b]+$/;
                    setOtp({ ...otp, 0: text.replace(/[^0-9]/g, "") });
                    text && secondInput.current.focus();
                  }}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 1: text.replace(/[^0-9]/g, "") });
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 2: text.replace(/[^0-9]/g, "") });
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 3: text.replace(/[^0-9]/g, "") });
                    !text && thirdInput.current.focus();
                  }}
                />
              </View>
              <View style={cs.ac}>
                <TouchableOpacity
                  style={cs.commonBtn}
                  onPress={handleSubmitOTP}
                >
                  <Text style={cs.commonBtnText}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View marginT-10 style={{ alignItems: "flex-end" }}>
                {/* Resend Button */}
                <TouchableOpacity>
                  <Text style={styles.resend}>Resend OTP?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default OTP;
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
    borderRadius: 192.5,
  },
  normalText: {
    ...Font.fs26,
    color: Color.blueColor,
    letterSpacing: 1,
  },
  boldText: {
    ...Font.fs22M,
    color: Color.blueColor,
    letterSpacing: 1,
    lineHeight: 40,
  },
  grayText: {
    ...Font.fs20L,
    color: Color.grayColor,
  },
  grayText15R: {
    ...Font.fs15,
    color: Color.grayColor,
  },
  themeText15R: {
    ...Font.fs15,
    color: Color.blueColor,
  },
  subView: {
    ...cs.flex,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: height / 1.7,
    marginTop: -55,
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
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    resizeMode: "contain",
    width: 36,
    height: 36,
  },
  inputStyle: {
    paddingHorizontal: 15,
    ...Font.f15,
    height: 45,
    color: Color.inputTextColor,
  },
  girlImgView: {
    marginTop: height / 20,
    ...cs.ac,
  },
  input: {
    width: 50,
    height: 50,
    margin: 12,
    marginTop: 12,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e1f2f2",
    ...Font.fs20,
  },
  resend: {
    ...Font.fs20B,
  },
});
