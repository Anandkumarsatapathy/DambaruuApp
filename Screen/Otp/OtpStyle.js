import { StyleSheet, Dimensions } from "react-native";
import image from "../../AppConfig/image.js"
import cs from "../../AppConfig/CommonStyle.js"
import fonts from "../../AppConfig/fonts.js"
import Color from "../../AppConfig/colors.js"

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    mainView: {
        ...cs.flex,
        backgroundColor: Color.themeColor,
    },
    gradientCircle: {
        position: 'absolute',
        width: 385,
        height: 385, left: 67, top: -66,
        borderRadius: 192.5
    },
    normalText: {
        // ...Font.fs22L,
        color: Color.blueColor,
        letterSpacing: 1
    },
    boldText: {
        // ...Font.fs22M,
        color: Color.blueColor,
        letterSpacing: 1,
        lineHeight:40
    },
    grayText: {
        // ...Font.fs15L,
        color: Color.grayColor
    },
    grayText15R: {
        // ...Font.fs15,
        color: Color.grayColor
    },
    themeText15R: {
        // ...Font.fs15,
        color: Color.blueColor
    },
    subView: {
        ...cs.flex,
        backgroundColor: Color.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        height:height/1.7,
        marginTop:-55
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: Color.inputBGColor,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 30,
        paddingHorizontal: 10
    },
    flagView: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flag: {
        resizeMode: 'contain',
        width: 36,
        height: 36
    },
    inputStyle: {
        paddingHorizontal: 15,
        // ...Font.f15,
         height: 45,
        color:Color.inputTextColor
    },
    girlImgView:{
        marginTop:height/20,
        ...cs.ac
    },
    input: {
        width: 50,
        height: 50,
        margin: 12,
        marginTop: 12,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#e1f2f2",
      },
});

export default styles;
