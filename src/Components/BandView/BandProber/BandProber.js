import React,{useState,useEffect} from "react";
import {Animated,Text,TouchableWithoutFeedback as TWF} from "react-native";
import css from "./BandProber.style";
import {useKey} from "afile";
import {rem,border,vh} from "css";


export default function BandProber(props){
    const {band,height,containerHeight,flexDirection,onClose,probed}=props;
    return (
        <TWF onPress={onClose}>
        <Animated.View style={[css.bandprober,styles.bandprober(height,containerHeight)]} >
            <Animated.View style={[css.row0,{flexDirection},styles.row0(height,containerHeight)]}>
                {["overview","about","events"].map(label=>
                    <Text style={[css.label,css[label]]} key={useKey("label")}>{label}</Text>
                )}           
            </Animated.View>
            <Animated.View style={[css.row1,styles.row1(height,containerHeight,probed)]}>
                <Text style={{color:"white"}}>{band.name}</Text>
            </Animated.View>
        </Animated.View>
        </TWF>
    )
}

const sharedState={
    getOnValue:(containerHeight)=>containerHeight*0.6,
}

const styles={
    bandprober:(height,containerHeight)=>({
        height:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[css.bandprober.height,containerHeight*0.95],
            extrapolate:"clamp",
        }),
        bottom:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[css.bandprober.bottom,0],
            extrapolate:"clamp",
        }),
    }),
    row0:(height,containerHeight)=>({
        width:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[css.row0.width,"100%"],
            extrapolate:"clamp",
        }),
    }),
    row1:(height,containerHeight,probed)=>({
        display:probed?"flex":"none",
        opacity:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[0,1],
        }),
    }),
}