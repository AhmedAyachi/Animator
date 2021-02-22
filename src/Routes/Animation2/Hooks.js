import {useRef} from "react";
import {PanResponder,Animated} from "react-native";


export const useDrag=()=>{
    const coords=useRef(new Animated.ValueXY()).current;
    const backToOrigin=Animated.spring(coords,{
        toValue:{x:0,y:0},
        useNativeDriver:false,
        bounciness:10,
    });
    const panResponder=useRef(PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:Animated.event([null,{dx:coords.x,dy:coords.y}],{useNativeDriver:false}),
        onPanResponderRelease:()=>{
            backToOrigin.start();
        },
    })).current;
    return [coords,panResponder];
}