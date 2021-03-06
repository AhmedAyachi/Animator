import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    playercontrols:{
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
    },
    row0:{
        width:"100%",
        alignItems:"center",
    },
    row1:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    playbtn:{
        maxWidth:4*rem,
        height:4*rem,
        opacity:0.65,
        resizeMode:"contain",
    },
    directionbtn:{
        maxWidth:2*rem,
        height:2*rem,
        resizeMode:"contain",
    },
});

export default css;
