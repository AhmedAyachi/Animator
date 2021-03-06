import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    player:{
        width:5*rem,
        height:5*rem,
        borderRadius:40*rem,
        marginVertical:15,
        justifyContent:"center",
        alignItems:"center",
        //...border(2,"solid","#ff3d0d"),
        overflow:"visible",
    },
    icon:{
        maxWidth:"100%",
        resizeMode:"contain",
        marginRight:1*rem,
    },
});

export default css;
