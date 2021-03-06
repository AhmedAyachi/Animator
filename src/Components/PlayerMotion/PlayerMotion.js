import React from "react";
import {View,Animated} from "react-native";
import css from "./PlayerMotion.style";
import MotionBar from "./MotionBar/MotionBar";
import {useKey} from "afile";


export default function PlayerMotion(props){
    const {length}=props;
    return (
        <View style={[css.playermotion,props.style]}>
            {getMotionBars(length)}
        </View>
    )
}

PlayerMotion.defaultProps={
    length:30,
}

const getMotionBars=(length)=>{
    const bars=[];
    for(let i=0;i<length;i++){
        bars.push(<MotionBar key={useKey("motionbar")} style={{width:`${70/length}%`}}/>)
    }
    return bars;
}
