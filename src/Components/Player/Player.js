import React from "react";
import {View,Text,Animated} from "react-native";
import css from "./Player.style";
import {disc2} from "assets";
import * as H from "./Hooks";


export default function Player(props){
    const {song:{title,artist,poster}}=props;
    const [scale]=H.useScaleRotation(0.5);
    return (
        <View style={css.player}>
            <View style={css.badge}>
                <View style={css.corner}/>
            </View>
            <View style={css.songinfo}>
                <Text style={css.title}>{title}</Text>
                <Text style={css.artist}>{artist}</Text>
            </View>
            <Animated.Image style={[css.icon,styles.icon(scale)]} source={poster}/>
        </View>
    )
}

const styles={
    icon:(scale)=>({
        transform:[
            {scaleX:scale},
            {scaleY:scale},
        ],
    }),
}