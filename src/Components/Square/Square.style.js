import {useRef} from "react";
import {StyleSheet} from "react-native";
import {rem,vw} from "css";
import {border} from "afile";


const css=StyleSheet.create({
    square:{
        width:10*rem,
        height:10*rem,
        backgroundColor:"white",
        borderRadius:10,
    },
    row0:{
        width:"100%",
        height:"100%", 
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        textAlign:"center",
        fontSize:1*rem,
        fontWeight:"bold",
        color:"black",
    },
});

export default css;
