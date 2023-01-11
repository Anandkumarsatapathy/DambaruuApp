import React, { useState, useMemo, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
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

const Festvideo = ({ route, navigation }) => {
  const { tokeId } = route.params;
  const { height, width } = useWindowDimensions();
  const [data, setData] = useState([]);

  const [videoID, setvideoID] = useState(""); /**Set the video url */
  const [intial, setintial] = useState("");
  const [error, setError] = useState(""); /** Set the video Erro */

  /** Rotation Logic */
  const popDown = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };
  const popUp = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };
  /** Video rotation */
  useEffect(() => {
    popUp();
    return () => {
      popDown();
    };
  }, []);
  /* Config File */
  const yourConfig = {
    headers: {
      Authorization: "Bearer " + tokeId,
    },
  };
  /** Fetch PostData */
  const getMyPostData = async () => {
    try {
      const res = await client.get(
        `/courses/videofestival/`,
        yourConfig
      );

      setData(res.data.data);
      setintial(res.data.data[0].video_festivel);
    } catch (error) {
      console.log(error.name);
    }
  };
  useEffect(() => {
    getMyPostData();
  }, []);

  const Festvideo = () => {
    const value = data.find(({ id }) => id === videoID);
    console.log("value", value);
    setVideoId(value.content_file);
  };
  /** Render Item */
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          setintial(item.video_festivel);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, { width: width, height: height }]}>
      {/**video Player */}
      <Video
        style={[styles.flexVideo]}
        source={{
          uri: intial,
        }}
        resizeMode="cover"
        rate={1.0}
        volume={1.0}
        isMuted={false}
        isLooping={false}
        shouldPlay={false}
        positionMillis
        useNativeControls
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    
    marginVertical: 8,
    marginHorizontal: 10,
    width: 160,
    height: 100,
    borderRadius: 10,
   
  },
  flexImage: {
    width: 150,
    height: 95,
    marginBottom:60,
    borderRadius: 12,
  },
  flexVideo: {
    width: 600,
    height: 230,
    marginTop: 8,
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

export default Festvideo;
