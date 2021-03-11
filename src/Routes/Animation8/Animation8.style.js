import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    animation8:{
        width:"100%",
        flex:1,
        backgroundColor:colors.background,
        borderWidth:1,
    },
    background:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"100%",
        flexDirection:"row",
        resizeMode:"cover",
        zIndex:0,
    },
    bandslist:{
        height:"100%",
        justifyContent:"flex-start",
    },
});

export default css;
