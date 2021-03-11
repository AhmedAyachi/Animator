import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    songsection:{
        width:"100%",
        maxHeight:"100%",
        //...border(1,"solid","white"),
    },
    title:{
        fontFamily:"squadaone",
        fontSize:2.5*rem,
        fontWeight:"600",
        color:colors.secondary,
        marginBottom:1.25*rem,
    },
    song:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:1*rem,
    },
    songtitle:{
        flex:5,
        textTransform:"capitalize",
        fontWeight:"700",
        fontSize:1.5*rem,
        color:colors.text,
        opacity:0.85,
    },
    songduration:{
        flex:1,
        fontWeight:"700",
        fontSize:1.25*rem,
        color:colors.text,
        opacity:0.85,
    },
});

export default css;
