import {StyleSheet} from "react-native"
import {rem,border} from "css";


const css=StyleSheet.create({
    animation2:{
        backgroundColor:"#3dadeb",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
    },
    ball:{
        justifyContent:"center",
        alignItems:"center",
        width:5*rem,
        height:5*rem,
        borderRadius:50,
        backgroundColor:"white",
    },
    ballmsg:{
        maxWidth:"90%",
        textAlign:"center",
    },
});

export default css;
