import {StyleSheet} from "react-native";
import {rem,vw,vh,border} from "css";


const css=StyleSheet.create({
    illucard:{
        width:17*rem,
        marginHorizontal:1*rem,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        overflow:"visible",
        //...border(2,"solid","white"),
    },
    row0:{
        width:"100%",
        shadowColor:"black",
        shadowOpacity:0.5,
        shadowRadius:15,
        elevation:10,
    },
    row1:{
        width:"100%",
    },
    title:{
        width:"100%",
        textAlign:"center",
        fontFamily:"princesssofia",
        fontSize:3*rem,
        color:"white",
        marginVertical:10,
        //...border(2,"solid","blue"),
    },
    image:{
        maxWidth:"100%",
        height:25*rem,
        borderRadius:15,
        resizeMode:"cover",
    },
});

export default css;
