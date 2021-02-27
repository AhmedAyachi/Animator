import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    indicator:{
        width:"100%",
        position:"absolute",
        bottom:3*rem,
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"center",
    },
    ball:{
        width:1*rem,
        height:1*rem,
        borderRadius:50,
        backgroundColor:"black",
        marginHorizontal:0.5*rem,
    },
});

export default css;
