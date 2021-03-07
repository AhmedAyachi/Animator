import {useState,useRef,useEffect} from "react";
import {Animated,Easing} from "react-native";
import {useSelector,useDispatch} from "react-redux";
import {setPlaying} from "actions";


export const useProgressBar=(duration,containerRef)=>{
    const [_,render]=useState(false);
    const dispatch=useDispatch();
    const playing=useSelector(store=>store.animation7.playing);
    const state=useRef({
        progress:useRef(new Animated.Value(0)).current,
        duration:duration*1000,
        timebarwidth:null,
        animation:null,
    }).current;
    if(state.timebarwidth){
        if(playing){
            state.animation=Animated.timing(state.progress,{
                toValue:state.timebarwidth,
                easing:Easing.linear,
                duration:(state.timebarwidth-state.progress._value)*state.duration/state.timebarwidth,
                useNativeDriver:false,
            });
            state.animation.start(({finished})=>{
                if(finished){
                    state.progress.stopAnimation(()=>{
                        dispatch(setPlaying(false));
                        state.progress.setValue(0);
                    });
                }
            });
        }
        else{
            state.animation.stop();
        }
    }
    useEffect(()=>{
        containerRef.current.measure((x,y,width)=>{
            state.timebarwidth=width;
            render(!_);
        });
    },[]);
    return [state.progress,state.timebarwidth];
};