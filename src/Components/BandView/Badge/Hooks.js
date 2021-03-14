import {useRef} from "react";
import {PanResponder} from "react-native";


export const useSwipeUp=(callback)=>{
    const panResponder=useRef(PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onPanResponderEnd:(event,touch)=>{
            (touch.dy<-50)&&callback();
        },
    })).current;

    return panResponder;
}