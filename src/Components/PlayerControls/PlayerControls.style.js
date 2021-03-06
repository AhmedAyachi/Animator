import {StyleSheet} from "react-native";
import {rem,border} from "css";


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
        width:4*rem,
        height:4*rem,
        justifyContent:"center",
        alignItems:"center",
        ...border(1,"solid","#ff3d0d"),
        borderRadius:50,
        overflow:"hidden",
    },
    playbtnimg:{
        maxWidth:"30%",
        height:"100%",
        resizeMode:"contain",
    },
    directionbtn:{
        maxWidth:2*rem,
        height:2*rem,
        resizeMode:"contain",
    },
});

export default css;
