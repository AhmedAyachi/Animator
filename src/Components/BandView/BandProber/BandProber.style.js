import {StyleSheet} from "react-native";
import {rem,border,vh} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        height:15*rem,
        bottom:5*rem,
        justifyContent:"flex-start",
        alignItems:"center",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    row0:{
        width:"90%",
        flexDirection:"column",
        alignSelf:"flex-end",
        justifyContent:"space-around",
        alignItems:"flex-start",
    },
    row1:{
        width:"100%",
        display:"none",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
    },
    label:{
        fontFamily:"cabin",
        fontSize:1.75*rem,
        textTransform:"capitalize",
        marginVertical:1*rem,
        opacity:0.5,
        color:colors.secondary,
    },
    overview:{
        fontSize:2*rem,
        opacity:1,
    },
});

export default css;