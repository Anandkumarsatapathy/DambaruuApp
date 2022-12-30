import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const { width, height } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#FFD13E",
    borderBottomEndRadius: 50,
  },
  upperContainer: {
    flex: 0.8,
    backgroundColor: "#faa107",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    gap: 120,
    alignItems: "center",
  },

  middle_Container: {
    flex: 10,
    width: width,
  },

  flexCard: {
    width: width,
    marginTop: 20,
    height: height - 600,
    flexDirection: "row",

    marginLeft: 20,
    borderRadius: 20,
  },
  flexImage: {
    width: width - 40,
    height: width - 240,
    borderColor: "yellow",
    borderRadius: 12,

    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#E9F1FF",
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
  backGroundimage: {
    width: width,
    height: height,
  },
  subFont: {
    marginTop: 50,
    textShadowColor: "white",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginRight: 60,

     fontFamily: "Times New Roman",
    textShadowColor: "#343434",
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 5,
  },
});
export default Styles;
