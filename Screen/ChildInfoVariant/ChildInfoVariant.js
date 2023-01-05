/* eslint-disable react/react-in-jsx-scope */
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import styles from "./ChildScreenStyle";
import cardData from "../../CardData/InfoData";
import { useState, useEffect, useContext, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CardScreen from "../../Components/Card/CardScreen";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import fonts from "../../AppConfig/fonts.js";
import client from "../../Utils/Api";
import { Entypo } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

/**Modal Popup */
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
const ChildInfoVariant = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState("");
  const { height, width } = useWindowDimensions();
  const [visible, setVisible] = useState(false); //AVtart modal popup
  const [myData, setMyData] = useState([]); //standard Card Data
  const [selectedAge, setSelectedAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [avtar, setAvtar] = useState([]); //Avtart images Data
  const [childname, setChildname] = useState(""); //Student name
  const [selectedAvtar, setSelectedAvtar] = useState(" ");
  const [avatarId, setAvatarId] = useState("");
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  /*Fetch the Age group */
  const getMyPostData = async () => {
    try {
      const res = await client.get("/courses/standard/");
      setMyData(res?.data?.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getMyPostData();
  }, []);

  //
  const _onAge = (item) => {
    setSelectedAge(item.standard_name);
  };

  // Profile Avatar Images Get

  const getProfileAvtar = async () => {
    try {
      const res = await client.get("/user/profileAvatar");
      setAvtar(res.data.data);
      SecureStore.getItemAsync("mobileNumber")
        .then((response) => {
          setMobile(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getProfileAvtar();
  }, []);


  

  // Student Table Post Request

  const handleSubmitNo = () => {
    client
      .post("/user/students", {
        name: childname,
        mobile_number: mobile, //dynamic
        date_of_birth: "2022-10-19", //static
        standard: selectedAge,
        profile_picture: avatarId, //Dyanmic
        role_id: 4, //static
      })
      .then((response) => {
        if (response.data.status === "success") {
        
          navigation.navigate("Home", {
            ageGroup: selectedAge,
            stdName: response.data.data.name,
            toked: response.data.data.token,
            proAvatar: avatarId,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={[styles.container, { width: width, height: height }]}>
      {/* Image Container */}

      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Image source={image.logoTxt} style={{ resizeMode: "contain" }} />
        <Image
          source={image.sub_logoTxt}
          style={{ width: 90, resizeMode: "contain" }}
        />
      </View>
      {/* Modal  select Avtart  */}
      <ModalPopup visible={visible}>
        <View>
          <View style={styles.modalContainer}>
            <View style={styles.modalcross}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Entypo name="circle-with-cross" size={35} color="#194792" />
              </TouchableOpacity>
            </View>
            <View style={{ textAlign: "center" }}>
              <Text
                style={{ fontSize: 25, color: "black", textAlign: "center" }}
              >
                Choose Profile Picture
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <FlatList
                horizontal={true}
                data={avtar}
                extraData={selectedAvtar}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setAvatarId(item.avatar);
                      setVisible(false);
                    }}
                  >
                    <View
                      style={{
                        width: width / 3.35,
                        height: 160,
                        justifyContent: "space-evenly",
                        margin: 15,
                        marginBottom: 80,
                        //backgroundColor:"blue",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: item.avatar }}
                        style={{
                          width: width / 2.8,
                          height: height / 5.8,

                          borderRadius: 15,
                          resizeMode: "contain",

                          borderWidth: 2,
                          borderColor: "#194792",
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
        source={require("../../assets/BgImages/bg1.jpg")}
        style={styles.bgimage}
      >
        <View style={styles.subView}>
          <View style={[cs.row, cs.center]}>
            <Image source={image.star} />
            <Text style={[styles.boldText, { textAlign: "center", margin: 5 }]}>
              Your Child Info
            </Text>
            <Image source={image.star} />
          </View>
          {/* Enter Child Name Section */}
          <View style={styles.inputView}>
            <TextInput
              placeholder="Enter Your Name"
              // keyboardType='phone-pad'clear

              style={styles.inputStyle}
              onChangeText={(text) => setChildname(text)}
              value={childname}
            />
          </View>

          {/* Select Age Group Section */}

          <ScrollView>
            <View style={[cs.row, cs.center]}>
              <Image source={image.star} />
              <Text
                style={[styles.boldText, { textAlign: "center", margin: 10 }]}
              >
                Select Age Group
              </Text>
              <Image source={image.star} />
            </View>
            <View style={[cs.row, { flexWrap: "wrap" }]}>
              {/* DAte 15_oct-22 */}

              <FlatList
                data={myData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      _onAge(item);
                      setVisible(true);
                    }}
                  >
                    <View
                      style={{
                        width: width / 1.3,
                        height: 90,
                        justifyContent: "space-evenly",
                        marginBottom: 15,
                        marginLeft: 38,
                        justifyContent: "center",
                        alignItems: "center",
                        //backgroundColor: "#F05568",
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: "#194792",
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: width / 3.35,
                          height: height / 8.2,
                          borderRadius: 20,
                          borderWidth: 3,
                          borderColor: "#6D6E71",
                          resizeMode: "contain",
                          marginLeft: -240,
                          shadowColor: "black",
                          shadowOffset: { height: 2 },
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",

                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Text style={styles.ageFont}>{item.standard_name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </ScrollView>
          <View style={cs.ac}>
            <TouchableOpacity
              style={[styles.commonBtn]}
              // onPress={() => setVisible(true)}

              onPress={() => {
                handleSubmitNo();
              }}
            >
              <Text style={cs.commonBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ChildInfoVariant;
