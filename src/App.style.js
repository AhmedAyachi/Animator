import {StyleSheet} from "react-native";
import {border} from "afile";


const css=StyleSheet.create({
    container:{
        ...border(2,"solid","red"),
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
});

export default css;