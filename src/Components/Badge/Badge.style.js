import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    badge:{
        position:"absolute",
        top:"-20%",
        left:"1%",
        opacity:0.3,
        width:"120%",
        height:45*rem,
        borderRadius:80,
        backgroundColor:"white",
        transform:[
            {rotateZ:"-45deg"},
        ],
    },
});

export default css;
