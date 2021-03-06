import {StyleSheet} from "react-native";
import {rem} from "css";
import {} from "afile";


const css={...StyleSheet.create({
    header:{
        position:"absolute",
        top:0,
        width:"100%",
        paddingTop:3*rem,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        zIndex:100,
    },
}),...{
    arrow:{
        style:{
            opacity:0.5,
            marginHorizontal:2*rem,
        },
        color:"white",
        size:2*rem,
    },
}};

export default css;
