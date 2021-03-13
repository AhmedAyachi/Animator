import {useState,useRef} from "react";
import {Animated,Easing} from "react-native";
import {fadeIn} from "afile";


export const usePlayingAnimation=(duration)=>{
    const [playing,setPlaying]=useState(false);
    const state=useRef({
        duration:duration*10,
        isPaused:!playing,
        animation:null,
        width:Object.assign(new Animated.Value(0),{
            from:0,
            to:1,
        }),
    }).current;
    return [
        state.width,
        playing,
        {
            start:()=>{
                if(!playing){
                    state.animation=Animated.timing(state.width,{
                        toValue:state.width.to,
                        duration:state.duration,
                        easing:Easing.linear,
                        useNativeDriver:false,
                    });
                    state.animation.start(({finished})=>{
                        if(finished){
                            const {width}=state;
                            width.setValue(width.from);
                            state.duration=duration*10;
                            setPlaying(false);
                        }
                    });
                    state.isPaused=false;
                    setPlaying(true);
                }
            },
            toggle:function(){
                state.isPaused=!state.isPaused;
                if(state.isPaused){
                    state.width.stopAnimation(value=>{
                        const toValue=state.width.to;
                        state.duration=state.duration*(toValue-value)/toValue;
                    });
                }
                else{
                    state.animation=Animated.timing(state.width,{
                        toValue:state.width.to,
                        duration:state.duration,
                        easing:Easing.linear,
                        useNativeDriver:false,
                    });
                    state.animation.start(({finished})=>{
                        if(finished){
                            const {width}=state;
                            width.setValue(width.from);
                            state.duration=duration*10;
                            setPlaying(false);
                        }
                    });
                }
            },
            duration:state.duration,
    }];
}