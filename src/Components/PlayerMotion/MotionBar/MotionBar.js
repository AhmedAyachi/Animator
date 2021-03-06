import React from "react";
import {Animated} from "react-native";
import css from "./MotionBar.style";
import * as H from "./Hooks";


export default function MotionBar({style}){
    const [scaleY]=H.useScaleAnim();
    return (
        <Animated.View style={[css.motionbar,style,{transform:[{scaleY}]}]}>

        </Animated.View>
    )
}
