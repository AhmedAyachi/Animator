import {StyleSheet} from "react-native";
import {rem} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css=StyleSheet.create({
    songrow:{
        width:"100%",
        height:3*rem,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:0.5*rem,
        paddingVertical:2.5*rem,
    },
    col0:{
        flex:4,
    },
    col1:{
        flex:1,
    },
    title:{
        fontSize:1.5*rem,
        textTransform:"capitalize",
        marginVertical:2,
        color:"white",
    },
    artist:{
        fontSize:1*rem,
        textTransform:"capitalize",
        marginVertical:2,
        color:colors.secondary,
    },
});

export default css;
