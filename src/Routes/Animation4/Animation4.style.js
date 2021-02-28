import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    animation4:{
        flex:1,
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        zIndex:0,
    },
    list:{
        width:"100%",
        minHeight:"100%",
        alignItems:"center",
        //...border(2,"solid","red"),
    },
});

export default css;
