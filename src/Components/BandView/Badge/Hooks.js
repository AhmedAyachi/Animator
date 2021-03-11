import {useRef} from "react";
import {PanResponder} from "react-native";


export const useSwipeUp=(callback)=>{
    const panResponder=useRef(PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:(event,touch)=>{
            const {dy}=touch;
            (dy<-50)&&callback();
        },
    })).current;

    return panResponder;
}