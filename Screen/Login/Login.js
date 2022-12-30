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
import styles from "./LoginStyle.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import ChildInfoVariant from "../ChildInfoVariant/ChildInfoVariant.js";
import DropdownAlert from "react-native-dropdownalert";
import client from "../../Utils/Api";
import * as SecureStore from "expo-secure-store";
// import { image,cs,fonts,Color} from "../../AppConfig";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";

// eslint-disable-next-line react/prop-types
const Login = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [mobile, setMobile] = useState(""); // Intial mobinumber"
  const [mobileno, setMobileno] = useState(""); //after Check Mobile number
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
              <Text style={styles.boldText}>Mobile Number</Text>
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
                  // maxLength={10}
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
