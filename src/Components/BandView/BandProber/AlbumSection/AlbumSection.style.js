import {StyleSheet} from "react-native";
import {rem,border,vw} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css=StyleSheet.create({
    albumsection:{
        width:"100%",
        overflow:"hidden",
        //...border(1,"solid","white"),
    },
    title:{
        fontFamily:"squadaone",
        fontSize:2.5*rem,
        fontWeight:"600",
        color:colors.secondary,
        marginBottom:1.25*rem,
        paddingLeft:"15%",
        marginBottom:3*rem,
    },
    albums:{
        paddingRight:"10%",
        paddingLeft:"15%",
        paddingBottom:2*rem,
    },
    album:{
        width:15*rem,
        marginRight:5*vw,
        overflow:"hidden",
    },
    albumcover:{
        width:"100%",
        height:15*rem,
        resizeMode:"cover",
    },
    albumname:{
        fontFamily:"cabin",
        fontSize:1.25*rem,
        textAlign:"center",
        textTransform:"capitalize",
        marginTop:1*rem,
        color:colors.text,
    },
    morebg:{
        width:"100%",
        height:15*rem,
    },
    moreview:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        opacity:0.6,
    },
    moretext:{
        color:colors.secondary,
        fontWeight:"600",
        fontSize:1.5*rem,
    },
});

export default css;
