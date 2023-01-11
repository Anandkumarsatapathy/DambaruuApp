import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { React, useState } from "react";
import { useWindowDimensions } from "react-native";
import styles from "./PraentStyle";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import CardScreen from "../../Components/Card/CardScreen";
import CustomButton from "../../Components/Button/CustomButton";
import FooterScreen from "../../Components/Footer/FooterScreen";
import { SafeAreaView } from "react-native";
import { ParentData } from "../../CardData";
import { useNavigation } from "@react-navigation/native";
const PraentScreen = () => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const Parentdata = {
    image1: require("../../assets/parent/chilfInfo.png"),
    image2: require("../../assets/parent/assignmentTest.png"),
    image3: require("../../assets/parent/termCondition.png"),
    image4: require("../../assets/parent/contactUs.png"),
  };
  const [images, setImages] = useState([
    {
      id: "1",
      image: Parentdata.image1,
      locationNavigate: "ChildInfoVariant",
    },
    {
      id: "2",
      image: Parentdata.image2,
      locationNavigate: "Watch",
    },
    {
      id: "3",
      image: Parentdata.image3,
      locationNavigate: "PolicyScreen",
    },
    {
      id: "4",
      image: Parentdata.image4,
      locationNavigate: "Contact",
    },
  ]);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ImageBackground
        source={require("../../assets/BgImages/nativebg2.jpg")}
        resizeMode="cover"
        style={styles.backGroundimage}
      >
        <View style={styles.upperContainer}>
          <FontAwesome5
            style={{ marginTop: 20, marginLeft: 20 }}
            name="user-circle"
            size={27}
            color="red"
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "blue",
              marginTop: 20,
            }}
          >
            Parent
          </Text>
          <FontAwesome
            style={{ marginTop: 20, marginRight: 20 }}
            name="language"
            size={26}
            color="blue"
          />
        </View>
        {/* user Point */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>b</Text>
          </View>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontSize: 25,
              fontWeight: "bold",
              color: "#c9b959",
            }}
          >
            Parent Zone
          </Text>

          <FlatList
            numColumns={2}
            data={images}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(`${item.locationNavigate}`)}
              >
                <View
                  style={{
                    flex: 1.2,
                    flexDirection: "row",
                    margin: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    source={item.image}
                    key={index}
                    style={{
                      width: width / 2.2,
                      height: height / 3.6,
                      borderRadius: 12,
                      resizeMode: "cover",
                      marginTop: 20,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Button Part  */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>b</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PraentScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
