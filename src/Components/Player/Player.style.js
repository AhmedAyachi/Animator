import {StyleSheet} from "react-native";
import {rem,vh,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css=StyleSheet.create({
    player:{
        width:"100%",
        height:55*vh,
        justifyContent:"space-around",
        alignItems:"center",
    },
    badge:{
        position:"absolute",
        width:"150%",
        height:"100%",
        top:0,
        alignSelf:"center",
        backgroundColor:colors.primary,
        borderBottomLeftRadius:100*rem,
        borderBottomRightRadius:100*rem,
        opacity:0.2,
        zIndex:0,
    },
    corner:{
        position:"absolute",
        width:"55%",
        height:"55%",
        top:0,
        right:0,
        backgroundColor:colors.secondary,
        borderBottomLeftRadius:100*rem,
        opacity:1,
    },
    songinfo:{
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:2*rem,
        textTransform:"capitalize",
        color:"white",
    },
    artist:{
        textTransform:"capitalize",
        color:"white",
    },
    icon:{
        maxWidth:15*rem,
        height:15*rem,
        overflow:"hidden",
        borderRadius:100,
        resizeMode:"cover",
    },
});

export default css;
