import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    songsection:{
        width:"100%",
        maxHeight:"100%",
    },
    title:{
        fontFamily:"squadaone",
        fontSize:2.5*rem,
        fontWeight:"600",
        color:colors.secondary,
        marginLeft:"15%",
        marginBottom:1.25*rem,
    },
    songslist:{
        width:"100%",
        maxHeight:19*rem,
    },
});

export default css;
