import React from "react";
import {View,Text} from "react-native";
import css from "./SongRow.style";
import {AntDesign} from "@expo/vector-icons";
import {useKey} from "afile";


export default function SongRow(props){
    const {song:{title,artist},isCurrent,onPress}=props;
    return (
        <View style={css.songrow} onPress={onPress}>
            <View style={css.col0}>
                <Text style={css.title}>{title}</Text>
                <Text style={css.artist}>{artist}</Text>
            </View>
            <View style={css.col1}>
                <AntDesign/>
            </View>
        </View>
    )
}
