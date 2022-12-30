import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";

const { width, height } = Dimensions.get("window");
const Style = StyleSheet.create({
  container: {
    width: width,
    height: width,
    backgroundColor: "#FFD13E",
  },
  image: {
    marginTop: width * 0.05,
    alignItems: "center",
  },
  flexContainer: {
    marginTop: 30,
    width: width,
    height: width,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  textContainer: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30,
    color: "#194792",
    fontWeight: "bold",
  },
  input: {
    width: width - 20,
    height: 60,
    margin: 12,
    marginTop: 30,
    color: "blue",
    textDecorationLine: "underline",
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-start",
    backgroundColor: "#e1f2f2",
  },
  flexCard: {
    marginTop: 10,
    width: width - 20,
    height: 270,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexCardContainer: {
    marginTop: 12,
    marginLeft: 10,
    width: 120,
    height: 120,
  },
  flexImage: {
    width: 130,
    height: 120,
    borderRadius: 30,
  },
  viewModalBackground: {
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  modalContainer: {
    width: width - 30,
    height: height - 480,
    backgroundColor: "white",
    padding: 5,
    justifyContent: "center",
    marginTop: 120,
    borderRadius: 20,
    elevation: 2,
    alignItems: "center",
  },
  modalcross: {
    marginLeft: 265,
     marginTop:65,
  },

  button: {
    width: 180,
    height: 50,
    marginTop: width * 0.1,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#194792",
    borderRadius: 40,
    color: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  mainView: {
    ...cs.flex,
    backgroundColor: Color.themeColor,
  },
  gradientCircle: {
    position: "absolute",
    width: 385,
    height: 385,
    left: 67,
    top: -66,
    borderRadius: 200.5,
  },
  normalText: {
    ...Font.fs22L,
    color: Color.blueColor,
    letterSpacing: 1,
  },
  boldText: {
    ...Font.fs22M,
    color: Color.blueColor,
    letterSpacing: 1,
    lineHeight: 40,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  grayText: {
    ...Font.fs15L,
    color: Color.grayColor,
  },
  subView: {
    ...cs.flex,
    // backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 10,
    marginBottom: -46,
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: Color.inputBGColor,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: "#194792",
  },
  flagView: {
    width: 26,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    resizeMode: "contain",
    width: 42,
    height: 41,
  },
  inputStyle: {
    paddingHorizontal: 15,
    ...Font.f15,
    height: 45,
    color: Color.inputTextColor,
    ...cs.flex,
  },
  girlImgView: {
    marginTop: height / 20,
    ...cs.ac,
  },
  commonBtn: {
    width: 175,
    height: 45,
    marginBottom: 30,
    backgroundColor: Color.blueColor,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  ageFont: {
    marginTop: 60,

    width: width / 1.9,
    height: 90,
    textShadowColor: "white",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    color: "#194792",
    // fontFamily: "Times New Roman",
    textShadowColor: "#194792",
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 3,
  },
  bgimage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: height,
    marginBottom: 3,
  },
});

export default Style;
