import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    animation7:{
        width:"100%",
        flex:1,
        backgroundColor:"#1b1b1b",
    },
    background:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"50%",
        //transform:[{rotateZ:"180deg"}]
    },
    row0:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    row1:{
        width:"100%",
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        //...border(2,"solid","#ff3d0d"),
    },
});

export default css;
