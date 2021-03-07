import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation7;
const css={...StyleSheet.create({
    playlistbutton:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        marginBottom:20,
        //...border(2,"solid",colors.primary),
    },
    modalview:{
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.65)",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    songslist:{
        width:"100%",
        height:"100%",
        overflow:"hidden",
        paddingTop:2*rem,
        paddingHorizontal:"10%",
    },
    separator:{
        width:"100%",
        height:0.05,
        backgroundColor:"white",
    },
    listbackground:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        alignSelf:"center",
        opacity:0.6,
        zIndex:0,
    },
    btnimage:{
        maxWidth:"100%",
        height:"100%",
        resizeMode:"contain",
    },
}),...{
    listbtn:{
        name:"playlist-music",
        size:3*rem,
        color:colors.primary,
    },
}};

export default css;
