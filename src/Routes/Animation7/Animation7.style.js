import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css=StyleSheet.create({
    animation7:{
        width:"100%",
        flex:1,
        backgroundColor:colors.background,
    },
    background:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"100%",
    },
    row0:{
        width:"100%",
        alignItems:"center",
    },
    row1:{
        width:"100%",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        //...border(2,"solid","#ff3d0d"),
    },
    playermotion:{
        marginBottom:3*rem,
    },
});

export default css;
