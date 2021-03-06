import {StyleSheet} from "react-native";
import {rem,vh,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css=StyleSheet.create({
    player:{
        width:"100%",
        height:55*vh,
        justifyContent:"center",
        alignItems:"center",
    },
    badge:{
        width:"150%",
        height:"100%",
        position:"absolute",
        top:0,
        alignSelf:"center",
        backgroundColor:colors.primary,
        borderBottomLeftRadius:100*rem,
        borderBottomRightRadius:100*rem,
        zIndex:0,
    },
    icon:{
        maxWidth:"50%",
        resizeMode:"contain",
        //marginRight:1*rem,
    },
});

export default css;
