import {useRef,useEffect,useMemo,useCallback} from "react";
import{Animated,Easing} from "react-native";


export const useSwipeAnimation=(containerHeight,probed)=>{
    const state=useRef({
        height:new Animated.Value(containerHeight/2),
        duration:850,
    }).current;
    const animation=useCallback(Animated.timing(state.height,{
        toValue:probed?containerHeight/2:containerHeight,
        duration:state.duration,
        easing:Easing.elastic(0.35),
        useNativeDriver:false,
    }),[probed]);
    return [
        state.height,
        {
            ...animation,
            duration:state.duration,
        }
    ];
}