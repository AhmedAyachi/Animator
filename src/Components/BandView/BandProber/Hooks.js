import {useRef,useEffect} from "react";
import {Animated} from "react-native";


export const usePopUpAnimation=(probed)=>{
    const state=useRef({
        y:Object.assign(new Animated.Value(50),{
            from:50,
            to:0,
        }),
        duration:500,
        delay:100,
    }).current;
    useEffect(()=>{
        if(probed){
            Animated.timing(state.y,{
                toValue:state.y.to,
                duration:state.duration,
                delay:state.delay,
                useNativeDriver:true,
            }).start();
        }
    },[probed]);
    return [state.y];
}

/*const popupstarter=height.addListener(({value})=>{
            if(value>=containerHeight){
                Animated.timing(state.y,{
                    toValue:state.y.to,
                    duration:state.duration,
                    delay:state.delay,
                    useNativeDriver:true,
                }).start(({finished})=>{
                    finished&&height.removeListener(popupstarter);
                });
            }
        });*/
        //finished&&height.removeListener(popupstarter);