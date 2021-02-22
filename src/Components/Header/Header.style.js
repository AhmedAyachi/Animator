import {StyleSheet} from "react-native";
import {rem} from "css";
import {} from "afile";


const css={...StyleSheet.create({
    header:{
        paddingVertical:2*rem,
        justifyContent:"center",
        backgroundColor:"#dc143c",
        borderBottomWidth:5,
        borderBottomColor:"black",
    },
    row0:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    row1:{
        alignItems:"center",
    },
    title:{
        fontSize:3*rem,
        color:"white",
    },
}),...{
    arrow:{
        color:"white",
        size:2*rem,
    },
}};

export default css;
