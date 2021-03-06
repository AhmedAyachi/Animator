import {useState,useRef,useEffect} from "react";
import {Animated,Easing} from "react-native";


export const useProgressBar=(duration,containerRef)=>{
    const [_,render]=useState(false);
    const state=useRef({
        progress:new Animated.Value(0),
        timebarwidth:null,
        animation:null,
    }).current;
    useEffect(()=>{
        containerRef.current.measure((x,y,width)=>{
            state.animation=Animated.timing(state.progress,{
                toValue:width,
                easing:Easing.linear,
                duration:duration*1000,
                useNativeDriver:false,
            });
            state.animation.start();
            state.timebarwidth=width;
            render(!_);
        });
    },[]);
    return [state.progress,state.timebarwidth,state.animation];
};