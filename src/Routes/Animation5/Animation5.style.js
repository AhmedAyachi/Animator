import {StyleSheet} from "react-native";
import {inset} from "css";


const css=StyleSheet.create({
    animation5:{
        flex:1,
        backgroundColor:"black",
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        ...inset(0),
    },
    cardlist:{
        minWidth:"100%",
        height:"100%",
    },
});

export default css;
