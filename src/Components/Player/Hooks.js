import {useState,useRef,useEffect} from "react";
import {Animated,Easing} from "react-native";
import {useSelector} from "react-redux";


export const useScaleRotation=(duration=5)=>{
    const playing=useSelector(store=>store.animation7.playing);
    const state=useRef({
        duration:duration*1000,
        scaleXY:new Animated.Value(1),
        animation:null,
    }).current;
    useEffect(()=>{
        state.animation=Animated.spring(state.scaleXY,{
            toValue:1.5,
            useNativeDriver:true,
        });
        playing&&state.animation.start();
    },[]);
    
    return [state.scaleXY];
}

const getRotationZAnimation=(state)=>Animated.loop(
    Animated.timing(state.rotateZ,{
        toValue:360,
        easing:Easing.linear,
        duration:state.duration,
        useNativeDriver:true,
    })
);