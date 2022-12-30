import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Styles = StyleSheet.create({
  homeContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
  upperContainer: {
    flex: 0.5,
    backgroundColor: "#faa107",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    gap: 60,
    alignItems: "center",
  },

  middle_Container: {
    flex: 5,
  },
  input: {
    height: 60,
    marginTop: 30,
    color: "#e3e1da",
    textDecorationLine: "underline",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fadb87",
  },
  flexCard: {
    flex: 1,
    marginTop: 10,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexcardContainer: {
    marginTop: 10,
    marginLeft: 30,
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  flexcardText: {
    width: 150,
    height: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "red",
  },
  flexImage: {
    width: 140,
    height: 100,
    margin: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  lower: {
    flex: 0.4,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconImage: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
  },
});
export default Styles;
