import {StyleSheet} from "react-native";
import {rem,border,vh} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        bottom:"10%",
        justifyContent:"flex-start",
        alignItems:"center",
        overflow:"hidden",
    },
    row0:{
        width:"90%",
        flexDirection:"column",
        alignSelf:"flex-end",
        justifyContent:"space-around",
        alignItems:"flex-start",
    },
    row1:{
        display:"none",
        width:"100%",
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