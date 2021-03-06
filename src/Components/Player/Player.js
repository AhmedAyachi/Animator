import React from "react";
import {View,Image,Animated} from "react-native";
import css from "./Player.style";
import {music1,disc2} from "assets";


export default function Player(props){
    const {}=props;
    return (
        <View style={css.player}>
            <View style={css.badge}/>
            {<Image style={css.icon} source={disc2}/>}
        </View>
    )
}