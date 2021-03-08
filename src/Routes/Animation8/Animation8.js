import React from "react";
import {View,ImageBackground,Modal} from "react-native";
import css from "./Animation8.style";
import {SwipeView} from "components";
import {diewoord0} from "assets";


export default function Animation8(){
    return (
        <View style={css.animation8}>
            <ImageBackground style={css.background} source={diewoord0} blurRadius={2}>
                <View style={css.content}>
                    <SwipeView/>
                </View>
            </ImageBackground>
        </View>
    )
}