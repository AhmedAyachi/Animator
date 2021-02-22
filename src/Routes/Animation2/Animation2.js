import React,{useRef} from "react";
import {Animated,PanResponder,Text} from "react-native";
import css from "./Animation2.style";


export default function Animation2({style}){
    const coords=useRef(new Animated.ValueXY()).current;
    const panResponder=useRef(PanResponder.create({
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderGrant:()=>{
            coords.setOffset({x:0,y:0});
        },
        onPanResponderMove:Animated.event([null,{dx:coords.x,dy:coords.y}],{useNativeDriver:false}),
        onPanResponderRelease:()=>{
            Animated.spring(coords,{
                toValue:{x:0,y:0},
                useNativeDriver:false,
                bounciness:10,
            }).start();
        },
    })).current;
    return (
        <Animated.View style={[css.animation2,style]}>
            <Animated.View style={[css.ball,{left:coords.x,top:coords.y}]} {...panResponder.panHandlers}>
                <Text style={css.ballmsg}>Move me</Text>
            </Animated.View>
        </Animated.View>
    )
}