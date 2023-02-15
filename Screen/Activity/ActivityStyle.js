import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Font from "../../AppConfig/fonts.js";
const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
  },
  upperContainer: {
    heigh: 70,
    backgroundColor: "yellow",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subFont: {
    color: "white",

    fontWeight: "500",
    ...Font.fs20,
    textShadowColor: "white",
    alignItems: "center",
    textAlign: "center",

    color: "white",

    textShadowColor: "#194792",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 3,
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
    marginLeft: 40,
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  flexcardText: {
    width: 100,
    height: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "red",
  },
  flexImage: {
    width: 100,
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

  /**Button Design */
  button: {
    width: 160,
    height: 45,
    marginTop: 40,
    marginLeft: 100,
    alignItems: "center",
    borderRadius: 10,
    color: "white",

    alignItems: "center",
    justifyContent: "center",
  },
  /* Modal Sytle part */
  viewModalBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  modalContainer: {
    width: width - 30,
    height: width - 370,
    backgroundColor: "white",
    padding: 18,
    justifyContent: "center",
    marginTop: 185,
    borderRadius: 20,
    elevation: 2,
    alignItems: "center",
  },
  modalcross: {
    marginLeft: 260,
  },
});
export default Styles;
