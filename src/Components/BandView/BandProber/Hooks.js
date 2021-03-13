import {useRef,useEffect} from "react";
import {Animated} from "react-native";


export const usePopUpAnimation=(height,containerHeight,flexDirection)=>{
    const state=useRef({
        /*initValue:50,
        toValue:0,*/
        y:Object.assign(new Animated.Value(50),{
            from:50,
            to:0,
        }),
        duration:500,
        delay:100,
    }).current;
    const animation=Animated.timing(state.y,{
        toValue:state.y.to,
        duration:state.duration,
        delay:state.delay,
        useNativeDriver:true,
    });
    useEffect(()=>{
        const popupstarter=height.addListener(({value})=>{
            if(value>=containerHeight){
                animation.start();
            }
        });
        return ()=>{
            height.removeListener(popupstarter);
        }
    },[flexDirection]);
    return [state.y,{
            ...animation,
            duration:state.duration,
        },
    ];
}