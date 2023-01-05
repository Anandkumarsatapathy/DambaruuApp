import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./HomeScreenStyle.js";
import cardData from "./imageData";
import image from "../../AppConfig/image.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Footer from "../../Components/Footer/FooterScreen";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
import { config } from "../../Utils/Api";
import { useRoute } from "@react-navigation/native";
import client from "../../Utils/Api";
/* ModalPopup Component */
const ModalPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.viewModalBackground}>{children}</View>
    </Modal>
  );
};
const HomeScreen = ({ navigation}) => {
  const route = useRoute();
  console.log(route);
  const { ageGroup, stdName, toked, proAvatar } = route.params;
  console.log(ageGroup);
  const [aImage, setaImage] = useState(proAvatar);
  const [profData, setprofData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [Btn, setBtn] = useState([]);
  const [visible, setVisible] = useState(false);
  const { height, width } = useWindowDimensions();
  /**Config File */
  const yourConfig = {
    headers: {
      Authorization: "Bearer " + toked,
    },
  };

  /* Filter Data */
  const filter = JSON.stringify({
    standard_id__standard_name: ageGroup,
  });

  /* Fetch Subject Api */
  const getStory = async () => {
    try {
      const res = await client.get(
        `/courses/subject/?filters=${filter}`,
        yourConfig
      );
      setData(res.data.data);
    } catch (error) {
      setError(error.name);
    }
  };

  /*Fetch Profile Images */
  const profileAvatar = async () => {
    try {
      const res = await client.get(
        `/user/profileAvatar`
      );

      setprofData(res.data.data);
    } catch (error) {
      setError(error.name);
    }
  };
  /** New videos Button Bg Images  */
  const fetchFestivalBtn = async () => {
    try {
      const res = await client.get(
        `/courses/festival/`,
        yourConfig
      );

      setBtn(res.data.data);
    } catch (error) {
      setError(error.name);
    }
  };
  useEffect(() => {
    profileAvatar();
    getStory();
    fetchFestivalBtn();
  }, []);

  return (
    <View style={cs.container}>
      {/* Modal Avatar */}
      <ModalPopup visible={visible}>
        <View>
          <View style={styles.modalContainer}>
            <View style={styles.modalcross}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Entypo name="circle-with-cross" size={35} color="#194792" />
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 25, color: "black" }}>
                Choose Profile Picture
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <FlatList
                horizontal={true}
                data={profData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setaImage(item.avatar);
                      setVisible(false);
                    }}
                  >
                    <View
                      style={{
                        width: width / 3.35,
                        height: 100,
                        justifyContent: "space-evenly",
                        margin: 20,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: item.avatar }}
                        style={{
                          width: width / 3.35,
                          height: 150,
                          borderRadius: 10,
                          resizeMode: "contain",
                          borderColor: "red",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </ModalPopup>
      <ImageBackground
        source={image.headerBG}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* Profile image  */}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image
              source={{ uri: aImage }}
              style={{
                width: 49,
                height: 49,
                borderWidth: 2,
                borderRadius: 50,
                borderColor: "#194792",
                resizeMode: "contain",
                backgroundColor: "white",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              height: 33,
              width: width - 220,
              ...Font.fs26,
              marginLeft: 0,
              marginTop: 5,
              backgroundColor: "#194792",
              color: "white",
              borderRadius: 10,
              borderColor: "#FFCB23",
              borderWidth: 2,
              textAlign: "center",
              justifyContent: "space-around",
            }}
          >
            Hello {stdName}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.middle_Container}>
        <ScrollView>
          {/* New videos Button  */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Festvdo", {
                tokeId: toked,
              });
            }}
          >
            {Btn.slice(0, 1).map((obj) => {
              return (
                <Image
                  source={{ uri: obj.image }}
                  style={{
                    width: width - 40,
                    height: 80,
                    borderRadius: 12,
                    resizeMode: "contain",
                  }}
                />
              );
            })}
            <Text
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginTop: 22,
                fontSize: 25,
                fontWeight: "500",
                ...Font.fs26,
                // color:"#194792",
              }}
            >
              New Videos
            </Text>
          </TouchableOpacity>
          {/* New videos Button End  */}
          <View style={[cs.row, { flexWrap: "wrap" }]}>
            {/* DAte 25_oct-22 */}

            <FlatList
              numColumns={2}
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Stories", {
                      subName: item.subject_name,
                      toked: toked,
                      subId: item.id,
                    })
                  }
                >
                  <View
                    style={{
                      width: width / 2,
                      height: height - 550,
                      justifyContent: "space-evenly",

                      marginTop: 45,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item.subject_image }}
                      style={{
                        width: width / 2.1,
                        height: height / 3.6,
                        borderRadius: 12,
                        resizeMode: "cover",
                        borderColor: "#194792",
                        borderWidth: 3,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        width: width / 3.35,
                        height: height - 540,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.subFont}>{item.subject_name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>

        {/* Subject Card View */}
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default HomeScreen;
