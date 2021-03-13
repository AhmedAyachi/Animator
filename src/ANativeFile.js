import {useRef,useMemo} from "react";
import {Animated,Easing} from "react-native";


/*export const useFadeIn=(duration=0.25)=>{
    const state=useRef({
       opacity:new Animated.Value(0),
       duration:duration*1000,
    }).current;
    const animation=Animated.timing(state.opacity,{
        toValue:1,
        duration:state.duration,
        easing:Easing.linear,
        useNativeDriver:true,
    });

    return [{
        opacity:state.opacity,
    },{
        stop:(callback)=>{state.opacity.stopAnimation(callback)},
        reset:()=>{state.opacity.setValue(0)},
        start:(ref,callback)=>{
            state.opacity.setValue(0);
            ref&&ref.setNativeProps({style:{
                display:"flex",
                opacity:state.opacity,
            }});
            animation.start(callback);
        },
    },
    ];
}

export const useFadeOut=(duration=0.25)=>{
    const state=useRef({
       opacity:new Animated.Value(1),
       duration:duration*1000,
    }).current;
    const animation=Animated.timing(state.opacity,{
        toValue:1,
        duration:state.duration,
        easing:Easing.linear,
        useNativeDriver:true,
    });

    return [{
        opacity:state.opacity,
    },{
        stop:(callback)=>{state.opacity.stopAnimation(callback)},
        reset:()=>{state.opacity.setValue(0)},
        start:(ref,callback)=>{
            state.opacity.setValue(0);
            ref&&ref.setNativeProps({style:{display:"flex"}});
            animation.start(callback);
        },
    },
    ];
}*/

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