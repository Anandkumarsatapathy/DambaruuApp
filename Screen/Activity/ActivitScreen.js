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
import styles from "./ActivityStyle.js";
import ActivityData from "../../CardData/Activity";
import image from "../../AppConfig/image.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
const ActivityScreen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [sounds, setSounds] = useState();
  const [randomColor, setRandomColor] = useState();
  const { height, width } = useWindowDimensions();
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
              numColumns={1}
              data={ActivityData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(`${item.navigationRoute}`)}
                >
                  <View
                    style={{
                      width: width / 2.2,
                      height: height - 550,
                      justifyContent: "space-evenly",
                      backgroundColor: "yellow",
                      marginTop: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "green",
                      borderRadius: 10,
                      marginLeft: width / 35,
                    }}
                  >
                    <Text>{item.cardName}</Text>
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
export default ActivityScreen;
