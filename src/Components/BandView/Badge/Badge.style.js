import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css={...StyleSheet.create({
    badge:{
        width:"100%",
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        alignSelf:"center",
        opacity:0.5,
        backgroundColor:colors.primary,
        zIndex:0,
    },
    col0:{
        flex:4,
        height:"100%",
        justifyContent:"space-between",
        paddingHorizontal:"10%",
        zIndex:1,
        //...border(1,"solid","white"),
    },
    col1:{
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
        //...border(1,"solid","white"),
    },
    row0:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        paddingTop:1*rem,
        //...border(1,"solid","white"),
    },
    row1:{
        width:"100%",
        flex:3,
        justifyContent:"center",
        //...border(1,"solid","white"),
    },
    welcome:{
        fontFamily:"anton",
        fontSize:4*rem,
        marginVertical:-1.25*rem,
        textTransform:"capitalize",
        color:colors.secondary,
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
    followus:{
        fontFamily:"anton",
        fontSize:1*rem,
        marginVertical:2*rem,
        textTransform:"capitalize",
        transform:[{rotateZ:"-90deg"}],
        color:colors.secondary,
    },
}),...{
    logo:{
        size:2*rem,
        color:colors.secondary,
        style:{
            marginVertical:1.5*rem,
            opacity:0.65,
        },
    },
}};

export default css;