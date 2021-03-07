import React from "react";
import {View,Text,TouchableOpacity as TO} from "react-native";
import css from "./SongRow.style";
import {AntDesign} from "@expo/vector-icons";


export default function SongRow(props){
    const {song:{title,artist},isCurrent,onPress}=props;
    return (
        <TO onPress={onPress}>
            <View style={css.songrow}>
                <View style={css.col0}>
                    <Text style={[css.title,styles.title(isCurrent)]}>{title}</Text>
                    <Text style={[css.artist,styles.title(isCurrent)]}>{artist}</Text>
                </View>
                <View style={css.col1}>
                    <AntDesign/>
                </View>
            </View>
        </TO>
    )
}

const styles={
    title:(isCurrent)=>({
        color:isCurrent?"#ff8484":"white",
    }),
}
