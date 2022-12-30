import { Platform, Dimensions } from "react-native";

import Color from "./colors";
import Font from "./fonts";
const { width, height } = Dimensions.get("window");

export default commonStyle = {
  container: { flex: 1 },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  commonBtn: {
    width: 175,
    height: 45,
    backgroundColor: Color.blueColor,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  commonBtnText: {
    ...Font.fs15M,
    color: Color.white,
    letterSpacing: 1,
  },
  commonBorderBtn: {
    width: 180,
    height: 45,
    borderWidth: 1,
    borderColor: Color.blueColor,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  commonBtnTextTheme: {
    ...Font.fs15M,
    color: Color.blueColor,
    letterSpacing: 1,
  },
  jc: { justifyContent: "center" },
  ac: { alignItems: "center" },
  center: { justifyContent: "center", alignItems: "center" },
  gradientCircle: {
    position: "absolute",
    width: width,
    height: width,
    left: 67,
    top: -40,
    borderRadius: 192.5,
  },
  containerTheme: {
    height: Platform.OS == "ios" ? 90 : 60,
    backgroundColor: Color.themeColor,
  },
};
