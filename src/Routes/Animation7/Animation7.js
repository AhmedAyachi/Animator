import React from "react";
import {View} from "react-native";
import css from "./Animation7.style";
import {Player,PlayerMotion,PlayerControls} from "components";


export default function Animation7(){
    return (
        <View style={css.animation7}>
            <View style={css.row0}>
                <Player/>
            </View>
            <View style={css.row1}>
                <PlayerMotion/>
                <PlayerControls duration={317}/>
            </View>
        </View>
    )
}

