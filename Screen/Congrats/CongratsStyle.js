import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Style = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#e8c309",
  },
  flexContainer: {
    marginTop: 30,
    height: windowHeight,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  backGroundimage: {
    width: windowWidth,
    height: windowHeight,
  },
});
export default Style;