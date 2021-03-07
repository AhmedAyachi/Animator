import {useState,useRef,useEffect} from "react";
import {Animated,Easing} from "react-native";
import {useSelector} from "react-redux";


export const useScaleRotation=(duration=5)=>{
    const playing=useSelector(store=>store.animation7.playing);
    const state=useRef({
        duration:duration*1000,
        scaleXY:new Animated.Value(1),
        rotateZ:new Animated.Value(0),
        animation:null,
    }).current;
    if(state.animation){
        if(playing){
            state.animation.start();
        }
        else{
            state.rotateZ.stopAnimation(()=>{
                state.rotateZ.setValue(0);
                state.animation=getRotationZAnimation(state);
            });
        }
    }
    else{
        state.animation=Animated.parallel([
            Animated.spring(state.scaleXY,{
                toValue:1.5,
                useNativeDriver:true,
            }),
            getRotationZAnimation(state),
        ],{
            stopTogether:false,
        });
        playing&&state.animation.start();
    }
    
    return [state.scaleXY,state.rotateZ];
}

const getRotationZAnimation=(state)=>Animated.loop(
    Animated.timing(state.rotateZ,{
        toValue:360,
        easing:Easing.linear,
        duration:state.duration,
        useNativeDriver:true,
    })
);