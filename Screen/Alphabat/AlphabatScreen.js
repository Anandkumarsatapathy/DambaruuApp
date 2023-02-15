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
import React, { useEffect, useState, useRef } from "react";
import styles from "./AlphabatStyle";
import AlpaData from "../../CardData/Alphabet";
import image from "../../AppConfig/image.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
import { Audio } from "expo-av";
const AlpabatScreen = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [sounds, setSounds] = useState();
  const [randomColor, setRandomColor] = useState();
  const { height, width } = useWindowDimensions();
  /** Sound Logic*/
  const playSound = async (soundDestination) => {
    const { sound } = await Audio.Sound.createAsync(soundDestination);
    setSounds(sound);
    await sound.playAsync();
  };
  /**Prevent From Echo */
  useEffect(() => {
    return () => {
      if (sounds) {
        sounds.unloadAsync();
      }
    };
  }, [sounds]);
  /**Random Color Generator */
  const colorGenerator = () => {
    let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    console.log(hexColor);
    setRandomColor(hexColor);
  };

  return (
    <View style={cs.container}>
      <ImageBackground
        source={image.headerBG}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      ></ImageBackground>
      <View style={styles.middle_Container}>
        <ScrollView>
          {/* New videos Button End  */}
          <View style={[cs.row, { flexWrap: "wrap" }]}>
            {/* DAte 25_oct-22 */}

            <FlatList
              numColumns={2}
              data={AlpaData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedId(item.id);
                    playSound(item.soundAlphabet);
                    colorGenerator();
                  }}
                >
                  <View
                    style={{
                      width: width / 2.2,
                      height: height - 550,
                      justifyContent: "space-evenly",
                      backgroundColor:
                        item.id == selectedId ? randomColor : "blue",
                      marginTop: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "green",
                      borderRadius: 10,
                      marginLeft: width / 35,
                    }}
                  >
                    <Text>{item.nameAlphabet}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>

        {/* Subject Card View */}
      </View>
    </View>
  );
};
export default AlpabatScreen;
