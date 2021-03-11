import {useRef} from "react";
import {PanResponder,Animated} from "react-native";


export const useDrag=()=>{
    const coords=useRef(new Animated.ValueXY()).current;
    const backToOrigin=Animated.spring(coords,{
        toValue:{x:0,y:0},
        useNativeDriver:false,
        bounciness:10,
        useNativeDriver:true,
    });
    const panResponder=useRef(PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:(event,touch)=>{
            const {dx,dy}=touch;
            coords.setValue({x:dx,y:dy});
        },
        onPanResponderRelease:()=>{
            backToOrigin.start();
        },
    })).current;
    return [coords,panResponder];
}