import {StyleSheet} from "react-native";
import {rem,vw} from "css";


const css=StyleSheet.create({
    illuview:{
        width:100*vw,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        width:"100%",
        fontFamily:"princesssofia",
        fontSize:3*rem,
        fontWeight:"800",
        color:"white",
        textAlign:"center",
        marginBottom:10,
        opacity:0.65,
    },
    postercontainer:{
        maxWidth:"60%",
        height:"50%",
        overflow:"visible",
        marginTop:10,
        elevation:100,
    },
    poster:{
        maxWidth:"100%",
        height:"100%",
        resizeMode:"cover",
        borderWidth:0.1,
        borderRadius:10,
        backgroundColor:"transparent",
    },
});

export default css;
