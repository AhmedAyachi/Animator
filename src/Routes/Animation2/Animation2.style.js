import {StyleSheet} from "react-native"
import {rem,border} from "css";


const css=StyleSheet.create({
    animation2:{
        backgroundColor:"#cc1999",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
    },
    ball:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        width:5*rem,
        height:5*rem,
        borderRadius:50,
        backgroundColor:"white",
    },
    ballmsg:{
        textAlign:"center",
        ...border(2,"solid","red"),
    },
});

export default css;
