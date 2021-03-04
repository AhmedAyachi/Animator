import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./MotionBar.style";
import * as H from "./Hooks";


export default function MotionBar(props){
    const [scaleY,animation]=H.useScaleAnim();
    animation.start();
    return (
        <Animated.View style={[css.motionbar,{transform:[{scaleY}]}]}>
            
        </Animated.View>
    )
}
