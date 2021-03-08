import {StyleSheet} from "react-native";
import {rem,vw,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandview:{
        /*width:100*vw,
        height:"100%",*/
        justifyContent:"flex-end",
        alignItems:"center",
        overflow:"hidden",
        //...border(1,"solid","red"),
    },
    content:{
        width:"100%",
        height:"50%",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    /*background:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
    },*/
    
});

export default css;