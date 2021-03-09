import {useRef} from "react";
import{Animated,Easing} from "react-native";


export const useSwipeAnimation=(containerHeight)=>{
    const height=useRef(new Animated.Value(containerHeight/2)).current;
    const animation=Animated.timing(height,{
        toValue:containerHeight,
        duration:850,
        easing:Easing.sin,
        useNativeDriver:false,
    });

    return [height,animation];
}