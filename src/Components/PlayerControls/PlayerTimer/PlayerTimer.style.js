import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    playertimer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },
    timebar:{
        width:"90%",
        height:0.2*rem,
        backgroundColor:"rgba(255,255,255,0.3)",
        overflow:"hidden",
    },
    playedbar:{
        width:"100%",
        height:"100%",
        backgroundColor:"#ff3d0d",
    },
});

export default css;
