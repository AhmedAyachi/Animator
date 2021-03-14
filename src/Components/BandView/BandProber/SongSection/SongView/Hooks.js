import {useState,useRef} from "react";
import {Animated,Easing} from "react-native";


export const usePlayingAnimation=(duration)=>{
    const [playing,setPlaying]=useState(false);
    const state=useRef({
        duration:duration*10,
        isPaused:null,
        animation:null,
        opacity:Object.assign(new Animated.Value(0),{
            from:0,
            to:1,
        }),
        width:Object.assign(new Animated.Value(0),{
            from:0,
            to:1,
        }),
    }).current;
    return [
        state.width,
        state.opacity,
        playing,
        {
            start:()=>{
                if(!playing){
                    setPlaying(true);
                    state.isPaused=false;
                    Animated.sequence([
                        Animated.timing(state.opacity,{
                            toValue:state.opacity.to,
                            duration:500,
                            useNativeDriver:true,
                        }),
                        Animated.timing(state.width,{
                            toValue:state.width.to,
                            duration:state.duration,
                            easing:Easing.linear,
                            useNativeDriver:false,
                        }),
                        Animated.timing(state.opacity,{
                            toValue:state.opacity.from,
                            duration:500,
                            useNativeDriver:true,
                        })
                    ]).start(({finished})=>{
                        const {width}=state;
                        width.setValue(width.from);
                        state.duration=duration*10;
                        state.isPaused=true;
                        finished&&setPlaying(false);
                    });
                    
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
                    Animated.sequence([
                        Animated.timing(state.width,{
                            toValue:state.width.to,
                            duration:state.duration,
                            easing:Easing.linear,
                            useNativeDriver:false,
                        }),
                        Animated.timing(state.opacity,{
                            toValue:state.opacity.from,
                            duration:500,
                            useNativeDriver:true,
                        })
                    ]).start(({finished})=>{
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