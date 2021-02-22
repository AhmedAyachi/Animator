import {useRef} from "react";
import {StyleSheet,Animated,Easing} from "react-native";
import {rem,vw} from "css";
import {} from "afile";


const css={...StyleSheet.create({
    animation0:{
        
    },
    homebutton:(animationvalue)=>({
        width:"100%",
        height:"100%",
        backgroundColor:animationvalue.interpolate({
            inputRange:[0,0.499,0.5,1],
            outputRange:["gold","gold","#0f0f0f","#0f0f0f"],
        }),
        justifyContent:"flex-end",
        alignItems:"center",
    }),
    button:(animationvalue)=>({
        width:6*rem,
        height:6*rem,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        marginBottom:"40%",
        backgroundColor:animationvalue.interpolate({
            inputRange:[0,0.499,0.5,1],
            outputRange:["#0f0f0f","#0f0f0f","gold","gold",],
        }),
        transform:[
            {perspective:400},
            {rotateY:animationvalue.interpolate({
                inputRange:[0,0.5,1],
                outputRange:["0deg","-90deg","-180deg"],
            })},
            {scale:animationvalue.interpolate({
                inputRange:[0,0.5,1],
                outputRange:[1,8,1],
            })},
            {translateX:animationvalue.interpolate({
                inputRange:[0,0.5,1],
                outputRange:[0,3*vw,0],
            })},
        ],
    }),
}),...{
    arrow:{
        name:"arrowright",
        size:2*rem,
        color:"white",
    },
    rotation:(forward)=>{
        const value=useRef(new Animated.Value(Number(!forward))).current;
        const animation=(()=>Animated.timing(value,{
            toValue:Number(forward),
            duration:3000,
            useNativeDriver:false,
        }))();
        return {animation,value};
    }
}};

export default css;
