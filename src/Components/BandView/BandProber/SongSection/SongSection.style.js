import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    songsection:{
        width:"100%",
        maxHeight:"100%",
        paddingHorizontal:"15%",
        //...border(1,"solid","white"),
    },
    title:{
        fontFamily:"squadaone",
        fontSize:2.5*rem,
        fontWeight:"600",
        color:colors.secondary,
        marginBottom:1.25*rem,
    },
    songslist:{
        width:"100%",
        maxHeight:19*rem,
        //...border(1,"solid","white"),
    },
});

export default css;
