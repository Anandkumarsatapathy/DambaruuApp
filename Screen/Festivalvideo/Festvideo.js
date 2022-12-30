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
      console.log("Vedio=", res.data.data);
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
        style={[styles.flexVideo, { marginTop: height < 400 ? 40 : 30 }]}
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
    backgroundColor: "#ccebd4",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 110,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
  },
  flexImage: {
    width: 110,
    height: 100,
    margin: 0,
    borderRadius: 10,
  },
  flexVideo: {
    width: 720,
    height: 240,
    alignSelf: "center",
    marginBottom: -40,
    justifyContent: "center",
  },
});

export default Festvideo;
