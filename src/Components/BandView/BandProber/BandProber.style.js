import {StyleSheet} from "react-native";
import {rem,border,vh} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css={...StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        height:18*rem,
        left:0,
        bottom:0,
        paddingBottom:1*rem,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    row0:{
        width:"100%",
        flexDirection:"column",
        paddingRight:2*rem,
        paddingLeft:"15%",
        justifyContent:"space-between",
        alignItems:"flex-start",
        //...border(1,"solid","white"),
    },
    row1:{
        width:"100%",
        flex:1,
        paddingTop:3*rem,
        justifyContent:"space-around",
        alignItems:"center",
    },
    row2:{
        width:"100%",
        opacity:0,
    },
    row3:{
        width:"100%",
        opacity:0,
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
}),...{
    closebtn:{
        size:2*rem,
        color:colors.secondary,
        style:{
            opacity:0.5,
            marginTop:1*rem,
            marginLeft:"13%",
        },
    },
}};

export default css;