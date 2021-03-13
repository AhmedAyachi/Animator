import {useState,useRef} from "react";
import {Animated,Easing} from "react-native";
import {fadeIn} from "afile";


export const usePlayingAnimation=(duration)=>{
    const [playing,setPlaying]=useState(false);
    const [isPaused,setIsPaused]=useState(!playing);
    const state=useRef({
        duration:duration*10,
        //isPaused:!playing,
        width:Object.assign(new Animated.Value(0),{
            from:0,
            to:1,
        }),
    }).current;
    const animation=Animated.timing(state.width,{
        toValue:state.width.to,
        duration:state.duration,
        easing:Easing.linear,
        useNativeDriver:false,
    });
    return [
        state.width,
        playing,
        {
            ...animation,
            start:()=>{
                if(!playing){
                    setPlaying(true);
                    state.isPaused=false;
                    alert("touched");
                    animation.start(({finished})=>{
                        if(finished){
                            const {width}=state;
                            width.setValue(width.from);
                            setPlaying(false);
                        }
                    });
                }
            },
            toggle:function(){
                state.isPaused=!state.isPaused;
                //console.log(state.isPaused);
                if(state.isPaused){
                    state.width.stopAnimation(value=>{
                        const toValue=state.width.to;
                        state.duration=state.duration*(toValue-value)/toValue;
                        alert(state.duration);
                    });
                }
                else{
                    animation.start(({finished})=>{
                        if(finished){
                            const {width}=state;
                            width.setValue(width.from);
                            setPlaying(false);
                        }
                    });
                }
            },
            duration:state.duration,
    }];
}