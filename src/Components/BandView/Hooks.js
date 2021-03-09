import {useRef} from "react";
import{Animated,Easing} from "react-native";


export const useSwipeAnimation=(containerHeight,probed)=>{
    const state=useRef({
        height:new Animated.Value(probed?containerHeight:containerHeight/2),
        duration:850,
    }).current;
    const animation=Animated.timing(state.height,{
        toValue:probed?containerHeight/2:containerHeight,
        duration:state.duration,
        easing:Easing.sin,
        useNativeDriver:false,
    });

    return [state.height,{
        duration:state.duration,
        ...animation,
    }];
}