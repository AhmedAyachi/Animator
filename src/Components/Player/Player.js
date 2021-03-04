import React from "react";
import {View,Image,Animated} from "react-native";
import css from "./Player.style";
import {music1} from "assets";


export default function Player(props){
    const {}=props;
    return (
        <View style={css.player}>
            <Image style={css.icon} source={music1}/>
        </View>
    )
}