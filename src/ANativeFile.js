import {useMemo} from "react";
import {Animated} from "react-native";


export const fadeIn=(opacity,duration=300)=>useMemo(()=>{
    const animation=(()=>Animated.timing(opacity,{
        toValue:1,duration,
        useNativeDriver:true,
    }))();
    return {
        stop:(callback)=>{opacity.stopAnimation(callback)},
        reset:()=>{opacity.setValue(0)},
        start:(ref,callback)=>{
            opacity.setValue(0);
            ref&&ref.setNativeProps({style:{display:"flex"}});
            animation.start(callback);
        },
    };
},[]);

export const fadeOut=(opacity,duration=300)=>useMemo(()=>{
    const animation=(()=>Animated.timing(opacity,{
        toValue:0,duration,
        useNativeDriver:true,
    }))();
    return {
        stop:(callback)=>{opacity.stopAnimation(callback)},
        reset:()=>{opacity.setopacity(0)},
        start:(ref,callback)=>{
            opacity.setValue(1);
            animation.start(()=>{
                ref&&ref.setNativeProps({style:{display:"none"}});
                callback&&callback();
            });
        },
    };
},[]);

export const rotateZ=(duration=1500)=>useMemo(()=>{
    const value=new Animated.Value(0);
    const animation=(()=>Animated.timing(value,{
        toValue:2,
        duration,
        useNativeDriver:true,
    }))();
    return {
        animation:{
            stop:(callback)=>{value.stopAnimation(callback)},
            reset:()=>{value.setValue(0)},
            set:(frame)=>{value.setValue(frame)},
            start:(ref,callback)=>{
                ref&&ref.setNativeProps({
                    style:{
                        display:"flex", 
                    },
                });
                value.setValue(0)
                animation.start(callback);
            },
        },
        value:value.interpolate({
        inputRange:[0,1,2],
        outputRange:["0deg","180deg","360deg"],
    })};
},[]);

export const useKey=(startwith="")=>`${startwith}_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;