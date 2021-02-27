import {useRef} from "react";
import {Animated} from "react-native";


export const useScroll=()=>{
    const scrollx=useRef(new Animated.Value(0)).current;
    const onScroll=Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{useNativeDriver:false});
    /**const onScroll=(event)=>{
        scrollx.setValue(event.nativeEvent.contentOffset.x);
    }*/

    return [scrollx,onScroll];
}