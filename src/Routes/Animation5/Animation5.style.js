import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    animation5:{
        flex:1,
        backgroundColor:"white",
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,bottom:0,left:0,right:0,
    },
    cardlist:{
        position:"absolute",
        minWidth:"100%",
        height:"100%",
        zIndex:100,
        elevation:0,
    },
});

export default css;
