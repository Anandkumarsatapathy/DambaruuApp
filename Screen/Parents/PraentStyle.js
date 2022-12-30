import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  homeContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#faf5d7",
  },
  upperContainer: {
    height: 90,
    backgroundColor: "#f5d522",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backGroundimage: {
    width: windowWidth,
    height: windowHeight,
  },
});

export default styles;