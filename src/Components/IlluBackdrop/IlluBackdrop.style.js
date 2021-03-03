import {StyleSheet} from "react-native";
import {inset} from "css";


const css=StyleSheet.create({
    illubackdrop:{
        position:"absolute",
        width:"100%",
        height:"100%",
        ...inset(0),
        zIndex:0,
    },
    backdrop:{
        position:"absolute",
        width:"100%",
        height:"100%",
        overflow:"hidden",
        margin:0,
        padding:0,
        ...inset(0),
    },
    image:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
    },
});

export default css;
