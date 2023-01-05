import React, { useState, useMemo, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  View,
  Text,
  Alert,
  ImageBackground,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { InterruptionModeIOS, Video } from "expo-av";
import Style from "../VideoScreen/VideoScreenStyle.js";
import * as ScreenOrientation from "expo-screen-orientation";
import { Entypo } from "@expo/vector-icons";

import client from "../../Utils/Api";
const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Image
      source={{ uri: item.thumbnail_image }}
      style={[styles.flexImage]}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const VideoScreen = ({ route, navigation }) => {
  const { tokenId, topicId } = route.params;
  const [count, setCounter] = useState(0);
  const [selectedId, setSelectedId] = useState("");

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [VideoId, setVideoId] = useState("");
  const [intial, setintial] = useState("");
  const [question, setQuestion] = useState({});
  const [answerText, setAnswerText] = useState("");
  const [visible, setVisible] = useState(false);
  const [rightanswer, setRightanswer] = useState(false);
  const [wornganswer, setWornganswer] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const [last, setLast] = useState(true);
  const [videoEnded, setVideoEned] = useState(false);
  const { height, width } = useWindowDimensions();
  /* Config File */
  const yourConfig = {
    headers: {
      Authorization: "Bearer " + tokenId,
    },
  };
  /*filter the data according topic_id*/
  const filter = JSON.stringify({
    topic_id: topicId,
  });
  /* fetch Video Data */
  const popDown = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };
  /*Logic For Rotation */
  const popUp = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };
  useEffect(() => {
    popUp();
    getMyPostData();
    return () => {
      popDown();
    };
  }, []);
  /** get video data  */
  const getMyPostData = async () => {
    try {
      const res = await client.get(
        `/courses/content/?filters=${filter}`,
        yourConfig
      );
      setData(res.data.data);
      console.log(res.data.data);
      setQuestionData(res.data.data[0]);
      setintial(res.data.data[0].content_file);
    } catch (error) {
      console.log(error);
    }
  };
  /* Quiz show orderly*/
  const nextQuestion = () => {
    let lengthQuiz = questionData.content_questions.length;
    if (count == lengthQuiz - 1) {
      setVisible(false);
      setAnswerText(false);
      setRightanswer(false);
    } else {
      setCounter(count + 1);
      setRightanswer(false);
    }
  };
  /*RenderItem Of Flatlist*/
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          setintial(item.content_file);
          setQuestionData(item);
        }}
      />
    );
  };

  /* Modal*/
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

  return (
    <SafeAreaView style={[styles.container, { width: width, height: height }]}>
      {/* Video Player */}
      <Video
        style={[styles.flexVideo]}
        source={{
          uri: intial,
        }}
        resizeMode="contain"
        rate={1.0}
        volume={1.0}
        isMuted={false}
        isLooping={false}
        shouldPlay={false}
        positionMillis
        useNativeControls={true}
        onPlaybackStatusUpdate={(playbackStatus) => {
          if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
              console.log(
                `Encountered a fatal error during playback: ${playbackStatus.error}`
              );
              // Send Expo team the error on Slack or the forums so we can help you debug!
            }
          } else {
            // Update your UI for the loaded state

            if (playbackStatus.isPlaying) {
              // Update your UI for the playing state
            } else {
              // Update your UI for the paused state
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
              setVisible(true);
            }
          }
        }}
      />
      {/* Quiz modal  */}

      {questionData && questionData.content_questions && (
        <ModalPopup visible={visible}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Entypo name="circle-with-cross" size={24} color="black" />
            </TouchableOpacity>
            <View>
              {questionData && questionData.content_questions && (
                <Text
                  style={{
                    fontSize: 25,
                    color: "black",
                    alignSelf: "center",
                  }}
                >
                  Question: {questionData.content_questions[count].question}
                </Text>
              )}
              {questionData && questionData.content_questions && (
                <FlatList
                  data={questionData.content_questions[count].options}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (
                          questionData.content_questions[count].answer ===
                          item.text
                        ) {
                          setRightanswer(true);
                        } else {
                          setWornganswer(true);
                        }
                        setAnswerText(item.text);
                      }}
                    >
                      <Image
                        style={{
                          width: 130,
                          height: 130,
                          borderRadius: 20,
                          marginHorizontal: 20,
                        }}
                        source={{
                          uri: item.image,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                />
              )}
            </View>
          </View>
        </ModalPopup>
      )}
      {/* Right Modal */}
      <ModalPopup visible={rightanswer} style={styles.modalContainer}>
        <View style={styles.modalContainer}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    color: "#194792",
                    marginTop: 55,
                    textAlign: "center",
                  }}
                >
                  CONGRATULATIONS!!
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => nextQuestion()}
                  style={styles.button}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginBottom: 10,
                    }}
                  >
                    Next Question
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/chandTara.png")}
                style={{
                  marginLeft: 35,
                  marginTop: 5,
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>
        </View>
      </ModalPopup>
      {/*Worng Modal */}
      <ModalPopup visible={wornganswer} style={styles.modalContainer}>
        <View style={styles.modalContainer}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    color: "#194792",
                    marginTop: 55,
                    textAlign: "center",
                  }}
                >
                  ohh,Sorry!!
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => setWornganswer(false)}
                  style={styles.button}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginBottom: 10,
                    }}
                  >
                    Try Again
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/taraTryAgain.png")}
                style={{
                  marginLeft: 35,
                  marginTop: 30,
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>
        </View>
      </ModalPopup>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    width: 110,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
  },
  flexImage: {
    width: 100,
    height: 90,
    margin: 0,
    borderRadius: 12,
  },
  flexVideo: {
    width: 420,
    height: 230,
    marginTop: 10,
    padding: 20,
    alignSelf: "center",

    borderRadius: 10,

    justifyContent: "center",
  },
  viewModalBackground: {
    width: 600,
    height: 200,
    borderRadius: 20,

    alignItems: "center",
    marginBottom: -40,
    marginLeft: 60,
  },
  modalContainer: {
    width: 500,
    height: 230,
    backgroundColor: "#E9F1FF",

    borderRadius: 20,
    elevation: 20,

    alignItems: "center",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "red",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
 
  button: {
    width: 160,
    height: 45,
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 40,
    color: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default VideoScreen;
