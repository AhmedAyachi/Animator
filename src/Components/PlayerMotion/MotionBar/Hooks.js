import {useRef} from "react";
import {Animated,Easing} from "react-native";


export const useScaleAnim=()=>{
    const value=useRef((10+Math.floor(Math.random()*90))/100).current;
    const duration=useRef(500+Math.floor(Math.random()*300)).current;
    const scaleY=useRef(new Animated.Value(value)).current;
    const animation=Animated.loop(
        Animated.sequence([
            Animated.timing(scaleY,{
                toValue:1,
                duration,
                easing:Easing.linear,
                useNativeDriver:true,
            }),
            Animated.timing(scaleY,{
                toValue:0.05,
                duration:0.95*duration/(1-value),
                easing:Easing.linear,
                useNativeDriver:true,
            }),
            Animated.timing(scaleY,{
                toValue:value,
                duration:(value-0.05)*duration/(1-value),
                easing:Easing.linear,
                useNativeDriver:true,
            }),
        ])
    );
    return [scaleY,animation];
}