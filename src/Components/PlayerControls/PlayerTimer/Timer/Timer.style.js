import {StyleSheet} from "react-native";
import {rem} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
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
        color:colors.primary,
        opacity:0.7,
    },
});

export default css;
