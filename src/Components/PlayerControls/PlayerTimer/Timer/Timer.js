import React,{useState,useRef,useEffect} from "react";
import {View,Text} from "react-native";
import css from "./Timer.style";
import * as H from "./Hooks";


export default function Timer(props){
    const {duration,barwidth,timebarwidth}=props;
    const playtime=H.usePlayTime(duration,barwidth,timebarwidth);
    return (
        <View style={css.timer}>
            <Text style={css.time}>{Math.floor(playtime/60)}:{getSeconds(playtime)}</Text>
            <Text style={css.time}>{Math.floor(duration/60)}:{getSeconds(duration)}</Text>
        </View>
    )
}

const getSeconds=(time)=>{
    const seconds=time%60;
    return `${seconds<10?"0":""}${seconds}`;
}