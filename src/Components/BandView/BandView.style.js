import {StyleSheet} from "react-native";
import {rem,vw,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandview:{
        height:"100%",
        justifyContent:"flex-end",
        alignItems:"center",
        overflow:"hidden",
        paddingTop:2*rem,
        //...border(1,"solid","red"),
    },
    content:{
        width:"100%",
        height:"100%",
        backgroundColor:colors.primary,
        justifyContent:"flex-end",
        alignItems:"center",
    },
});

export default css;