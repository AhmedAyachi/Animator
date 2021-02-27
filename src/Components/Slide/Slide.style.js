import {StyleSheet} from "react-native";
import {rem,vw,vh,border} from "css";


const css=StyleSheet.create({
    slide:{
        width:100*vw,
        height:"100%",
        alignItems:"center",
    },
    row0:{
        flex:2,
        width:"100%",
    },
    row1:{
        width:"100%",
        flex:1,
        alignItems:"center",
        paddingHorizontal:3*rem,
    },
    image:{
        maxWidth:"50%",
        alignSelf:"center",
        resizeMode:"contain",
    },
    title:{
        fontWeight:"800",
        fontSize:1.8*rem,
        marginBottom:1*rem,
        color:"black",
        textAlign:"center",
    },
    description:{
        fontWeight:"300",
        fontSize:1*rem,
        color:"black",
        textAlign:"center",
    },
});

export default css;
