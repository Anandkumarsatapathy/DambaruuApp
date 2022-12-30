import { StyleSheet } from "react-native";
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5c842",
  },
  image: {
    marginTop: 80,
    alignItems: "center",
  },
  flexContainer: {
    marginTop: 30,
    height: "83%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 20,
    color: "#1620db",
    fontWeight: "bold",
  },
  input: {
    height: 60,
    margin: 12,
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e1f2f2",
    hover: {
      backgroundColor: "red",
    },
  },
  Pickercontainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
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
});

export default Style;
