import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    animation7:{
        width:"100%",
        flex:1,
        backgroundColor:"#1b1b1b",
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
    /*motion:{
        width:"100%",
        height:10*rem,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        //...border(2,"solid","#ff3d0d"),
    },
    motionbar:{
        width:1*rem,
        height:"100%",
        marginHorizontal:1,
        backgroundColor:"#ff3d0d",
    },*/
    btns:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    playbtn:{
        maxWidth:5*rem,
        height:5*rem,
        opacity:0.65,
        resizeMode:"contain",
    },
    directionbtn:{
        maxWidth:2*rem,
        height:2*rem,
        resizeMode:"contain",
    },
});

export default css;
