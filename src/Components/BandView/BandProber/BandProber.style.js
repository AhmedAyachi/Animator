import {StyleSheet} from "react-native";
import {rem,border,vh} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        height:20*rem,
        left:0,
        bottom:0,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingLeft:"15%",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    row0:{
        width:"100%",
        flexDirection:"column",
        paddingRight:2*rem,
        justifyContent:"space-between",
        alignItems:"flex-start",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    row1:{
        width:"100%",
        display:"none",
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    row2:{
        width:"100%",
    },
    row3:{
        width:"100%",
        overflow:"scroll",
        //...border(1,"solid","white"),
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
    sectiontitle:{
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