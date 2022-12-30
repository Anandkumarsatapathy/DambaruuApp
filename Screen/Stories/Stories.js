import {
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState, useRef } from "react";
import styles from "./storiesStyle.js";
import cardData from "../../CardData/Carddata.js";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import cs from "../../AppConfig/CommonStyle.js";
import fonts from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
import client from "../../Utils/Api";
const Stories = ({ navigation, route }) => {
  const { subName, toked, subId } = route.params;
  //console.log("id", subId);
  const [data, setData] = useState([]);
  /*const [count, setCount] = useState([]);*/
  const [error, setError] = useState([]);

  const { height, width } = useWindowDimensions();
  //console.log(count);
  // Config File
  const yourConfig = {
    headers: {
      Authorization: "Bearer " + toked,
    },
  };

  /*filter the data according subject_id */
  const filter = JSON.stringify({
    subject_id: subId,
  });
  const getMyPostData = async () => {
    try {
      const res = await client.get(
        `/courses/topic/?filters=${filter}`,
        yourConfig
      );
      //console.log(res.data.data.id);
      setData(res.data.data);
    } catch (error) {
      setError(error.name);
    }
  };
  useEffect(() => {
    getMyPostData();
  }, []);

  /*Count Module Logic */
  // console.log(data);
  return (
    <SafeAreaView style={[styles.container, { width: width, height: height }]}>
      <View style={{ alignItems: "center", marginTop: 65 }}>
        <Image source={image.logoTxt} style={{ resizeMode: "contain" }} />
        <Image
          source={image.sub_logoTxt}
          style={{ width: 100, resizeMode: "contain" }}
        />
      </View>
      <ImageBackground
        source={require("../../assets/BgImages/bg1.jpg")}
        resizeMode="cover"
        style={styles.backGroundimage}
      >
        <View style={styles.middle_Container}>
          <ScrollView vertical={true}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("VideoScreen", {
                      tokenId: toked,
                      topicId: item.id,
                    });
                  }}
                >
                  <View style={styles.flexCard}>
                    <Image
                      source={{ uri: item.topic_image }}
                      style={styles.flexImage}
                    />
                    <View
                      style={{
                        position: "absolute",
                        width: width,
                        height: height,
                        textAlign: "center",
                      }}
                    >
                      <Text style={styles.subFont}>{item.topic_name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Stories;
