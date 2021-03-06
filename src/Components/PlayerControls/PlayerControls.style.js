import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css={...StyleSheet.create({
    playercontrols:{
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:2*rem,
    },
    row0:{
        width:"100%",
        alignItems:"center",
    },
    row1:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    playbtn:{
        width:4*rem,
        height:4*rem,
        justifyContent:"center",
        alignItems:"center",
        ...border(1.5,"solid",colors.primary),
        borderRadius:50,
        overflow:"hidden",
    },
}),...{
    directionbtn:{
        name:"controller-next",
        size:2.5*rem,
        color:colors.primary,
        style:{
            opacity:0.9,
        },
    },
    playbtnicon:{
        size:2*rem,
        color:colors.primary,
    },
}};

export default css;
