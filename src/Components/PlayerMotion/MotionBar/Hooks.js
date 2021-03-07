import {useRef} from "react";
import {Animated,Easing} from "react-native";
import {useSelector} from "react-redux";


export const useScaleAnim=()=>{
    const state=useRef({
        value:0.05,
        duration:500+Math.floor(Math.random()*300),
        animation:null,
    }).current;
    const scaleY=useRef(new Animated.Value(state.value)).current;
    state.animation=Animated.loop(
        Animated.sequence([
            Animated.timing(scaleY,{
                toValue:1,
                duration:state.duration,
                easing:Easing.linear,
                useNativeDriver:true,
            }),
            Animated.timing(scaleY,{
                toValue:0.05,
                duration:0.95*state.duration/(1-state.value),
                easing:Easing.linear,
                useNativeDriver:true,
            }),
            Animated.timing(scaleY,{
                toValue:state.value,
                duration:(state.value-0.05)*state.duration/(1-state.value),
                easing:Easing.linear,
                useNativeDriver:true,
            }),
        ])
    );
    const playing=useSelector(store=>store.animation7.playing);
    const stopanim=useRef(Animated.timing(scaleY,{
        toValue:0.05,
        duration:300,
        useNativeDriver:true,
    })).current;
    if(playing){
        state.animation.start();
    }
    else{
        state.animation.stop();
        stopanim.start();
    }
    return [scaleY,state.animation];
}