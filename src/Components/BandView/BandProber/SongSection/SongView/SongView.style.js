import {StyleSheet} from "react-native";
import {rem,border} from "css";
import {Colors} from "estate";


const colors=Colors.animation8;
const css={...StyleSheet.create({
    songview:{
        width:"70%",
        marginVertical:1*rem,
        alignSelf:"center",
        overflow:"visible",
        //...border(1,"solid","white"),
    },
    row0:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
        //...border(1,"solid","red"),
    },
    row1:{
        width:"100%",
    },
    title:{
        flex:5,
        textTransform:"capitalize",
        fontWeight:"700",
        fontSize:1.5*rem,
        color:colors.text,
        opacity:0.85,
    },
    duration:{
        flex:1,
        fontWeight:"700",
        fontSize:1.25*rem,
        color:colors.text,
        opacity:0.85,
    },
    progressbarbg:{
        width:"95%",
        height:0.25*rem,
        marginTop:2*rem,
        alignSelf:"flex-start",
        backgroundColor:colors.text,
    },
    progressbar:{
        width:"0%",
        height:"100%",
        backgroundColor:colors.primary,
    },
    stopbtn:{
        position:"absolute",
        left:-2.5*rem,
        //marginRight:1*rem,
        //padding:3,
    },
}),...{
    stopbtnicon:{
        size:2*rem,
        color:colors.primary,
        backgroundColor:"#007AFF",
        style:{
            width:"100%",
            alignSelf:"center",
            borderRadius:200,
            //backgroundColor:colors.secondary,
        },
    },
}};

export default css;
