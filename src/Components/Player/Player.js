import React from "react";
import {View,Image,Animated} from "react-native";
import css from "./Player.style";
import {music1,disc2} from "assets";
import * as H from "./Hooks";


export default function Player(props){
    const {}=props;
    const [scale,rotateZ]=H.useScaleRotation(0.5);
    return (
        <View style={css.player}>
            <View style={css.badge}>
                <View style={css.corner}/>
            </View>
            <Animated.Image style={[css.icon,styles.icon(scale,rotateZ)]} source={disc2}/>
        </View>
    )
}

const styles={
    icon:(scale,rotateZ)=>({
        transform:[
            {rotateZ:rotateZ.interpolate({
                inputRange:[0,360],
                outputRange:["0deg","360deg"],
            })},
            {scaleX:scale},
            {scaleY:scale},
        ],
    }),
}