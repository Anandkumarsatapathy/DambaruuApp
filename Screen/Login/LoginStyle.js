import { StyleSheet, Dimensions } from "react-native";
import image from "../../AppConfig/image.js";
import cs from "../../AppConfig/CommonStyle.js";
import Font from "../../AppConfig/fonts.js";
import Color from "../../AppConfig/colors.js";
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
        borderRadius: 200.5
    },
    normalText: {
        ...Font.fs22L,
        color: Color.blueColor,
        letterSpacing: 1
    },
    boldText: {
        ...Font.fs22M,
        color: Color.blueColor,
        letterSpacing: 1,
        lineHeight:40
    },
    grayText: {
        ...Font.fs15L,
        color: Color.grayColor
    },
    subView: {
        ...cs.flex,
        backgroundColor: Color.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        height:height/1.7,
        marginTop:-30
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
        width: 26,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flag: {
        resizeMode: 'contain',
        width: 42,
        height: 41
    },
    inputStyle: {
        paddingHorizontal: 15,
        ...Font.f15, height: 45,
        color:Color.inputTextColor,
        ...cs.flex
    },
    girlImgView:{
        marginTop:height/20,
        ...cs.ac
    }
});

export default styles;
