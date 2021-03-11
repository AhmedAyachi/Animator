import React,{useState,useRef,useEffect} from "react";
import {View,Text} from "react-native";
import css from "./Timer.style";
import * as H from "./Hooks";
import {getMinutes,getSeconds} from "estate";


export default function Timer(props){
    const {duration,barwidth,timebarwidth}=props;
    const playtime=H.usePlayTime(duration,barwidth,timebarwidth);
    return (
        <View style={css.timer}>
            <Text style={css.time}>{getMinutes(playtime)}:{getSeconds(playtime)}</Text>
            <Text style={css.time}>{getMinutes(duration)}:{getSeconds(duration)}</Text>
        </View>
    )
}

