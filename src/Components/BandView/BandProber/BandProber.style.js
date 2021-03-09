import {StyleSheet} from "react-native";
import {rem,border,vh} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        //height:13*rem,
        bottom:"10%",
        //left:"10%",
        //alignSelf:"center",
        justifyContent:"flex-start",
        alignItems:"center",
        overflow:"hidden",
        ...border(1,"solid","white"),
    },
    row0:{
        width:"100%",
        justifyContent:"space-around",
        alignItems:"flex-start",
        //...border(1,"solid","white"),
    },
    row1:{
        display:"none",
        width:"100%",
        flex:1,
        overflow:"hidden",
        backgroundColor:"white",
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