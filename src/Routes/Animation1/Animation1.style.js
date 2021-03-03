import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    animation1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dc143c",
    },
    title:{
        color:"black",
    },
    box:{
        width:20*rem,
        height:20*rem,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"black",
        marginVertical:10,
    },
    boxmsg:{
        color:"white",
        fontWeight:"bold",
    },
});

export default css;
