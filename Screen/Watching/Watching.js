/* eslint-disable react/prop-types */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Watchingstyle.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import client from "../../Utils/Api";
import * as SecureStore from "expo-secure-store";
const Watching = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const [userdata, setUserdata] = useState([]);
  const [token, setToken] = useState("");
  const [buttonDisbale, setButtonDisbale] = useState(true);
  const [erroMessage, setErroMessage] = useState("");
  /**Fetching profile Images */
  const getProfileImages = (tokenId) => {
    console.log("Watching Id:-", tokenId);
    client
      .post("/user/get-user-profile/", {
        txn_id: tokenId,
      })
      .then((response) => {
        if (response?.data?.status === "success") {
          let tokenId = response?.data?.data[0]?.token;
          SecureStore.setItemAsync("Token", token.toString());
          console.log(response?.data?.data);
          setUserdata(response?.data?.data);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErroMessage(error.message);
      });
  };
  useEffect(() => {
    SecureStore.getItemAsync("TxnId").then((data) => {
      getProfileImages(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.mainView}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0) 97.41%)"]}
        style={styles.gradientCircle}
      ></LinearGradient>
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
            source={image.otp_img}
            style={{ resizeMode: "contain", height: 200 }}
          />
        </View>
        <View style={styles.subView}>
          <Text style={styles.boldText}>Who is Watching</Text>
          {/* Existing User Design */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FlatList
              horizontal={true}
              data={userdata}
              // extraData={selectedAvtar}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity >
                  <View
                    style={{
                      justifyContent: "space-evenly",
                      margin: 10,
                      //backgroundColor:"blue",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item.profile_picture }}
                      style={{
                        width: width / 4,
                        height: height / 5,

                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#194792",
                        width: width / 4,
                        borderRadius: 20,
                        backgroundColor: "#e5e5e5",

                        textAlign: "center",
                        borderWidth: 0.2,
                        borderColor: "#194792",
                        fontFamily: "Times New Roman",
                        textShadowColor: "#194792",
                        textShadowOffset: { width: 0.5, height: 0.2 },
                        textShadowRadius: 0.2,
                      }}
                      key={item}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <TouchableOpacity
            style={[
              cs.ac,
              { height: 130, width: width / 3.4, marginVertical: 10 },
            ]}
            onPress={() => navigation.navigate("ChildInfoVariant")}
          >
            <Image
              source={image.add}
              style={{ width: 50, height: 100, resizeMode: "contain" }}
            />
            <View
              style={[
                styles.nameView,
                { backgroundColor: "transparent", paddingHorizontal: 0 },
              ]}
            >
              <Text marginT-10 style={[styles.nameStyle]} numberOfLines={1}>
                Add Profile
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
                <Text marginT-10 style={[styles.nameStyle]} numberOfLines={1}>
                  logout
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Watching;
