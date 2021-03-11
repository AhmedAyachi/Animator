import React from "react";
import {View,Text,Animated} from "react-native";
import css from "./SongSection.style";
import {useKey} from "afile";
import {getMinutes,getSeconds} from "estate";


export default function SongSection(props){
    const {songs}=props;
    return (
        <Animated.View style={css.songsection}>
            <Text style={css.title}>Popular</Text>
        {songs.map(({title,duration})=>
            <Animated.View style={css.song} key={useKey("popular")}>
                <Text style={css.songtitle}>{title}</Text>
                <Text style={css.songduration}>{getMinutes(duration)}:{getSeconds(duration)}</Text>
            </Animated.View>
        )}
        </Animated.View>
    )
}

SongSection.defaultProps={
    songs:[],
}