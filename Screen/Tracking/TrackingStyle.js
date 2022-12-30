import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  upperContainer: {
    flex: 1,
    backgroundColor: "#faa107",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    gap: 120,
    alignItems: "center",
  },

  middle_Container: {
    flex: 9,
    flexDirection: "column",
  },

  flexCard: {
    width: 320,
    marginTop: 70,
    height: 140,
    backgroundColor: "yellow",
    marginLeft: 10,
    alignSelf: "center",
    borderRadius: 20,
  },
  flexImage: {
    width: 150,
    height: 120,
    alignSelf:"flex-end",
    borderColor: "yellow",
    borderRadius: 20,
  },
});
export default Styles;
