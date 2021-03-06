import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    timer:{
        width:"85%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10,
    },
    time:{
        fontSize:1*rem,
        color:"white",
        opacity:0.7,
    },
});

export default css;
