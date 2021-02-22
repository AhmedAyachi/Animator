import React from "react";
import {View,Animated,Text} from "react-native";
import css from "./Animation2.style";
import * as H from "./Hooks";


export default function Animation2({style}){
    const [coords,panResponder]=H.useDrag();
    return (
        <View style={[css.animation2,style]}>
            <Animated.View style={[css.ball,{left:coords.x,top:coords.y}]} {...panResponder.panHandlers}>
                <Text style={css.ballmsg}>Drag Me</Text>
            </Animated.View>
        </View>
    )
}