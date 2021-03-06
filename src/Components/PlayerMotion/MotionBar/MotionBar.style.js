import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css=StyleSheet.create({
    motionbar:{
        width:1*rem,
        height:"100%",
        marginHorizontal:1,
        backgroundColor:colors.primary,
    },
});

export default css;
