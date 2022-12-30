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
    height: 58,
    backgroundColor: "#f5d522",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginTop: 166,
    width: 52,
    height: 50,

    marginTop: 30,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e1f2f2",
  },
  button: {
    width: 160,
    height: 45,
    marginTop: 30,
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
  backGroundImage: {
    width: windowWidth,
    height: windowHeight,
  },
});

export default styles;
