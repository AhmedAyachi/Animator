import React from "react";
import {View} from "react-native";
import css from "./Animation7.style";
import {Player,PlayerMotion,PlayerControls} from "components";
//import {LinearGradient} from "expo-linear-gradient";


export default function Animation7(){
    return (
        <View style={css.animation7}>
            {/*<LinearGradient style={css.background} colors={["#ff3d0d","transparent"]}
                start={[0,0]} end={[0,1]} locations={[0.01,0.5]}
            />*/}
            <View style={css.row0}>
                <Player/>
            </View>
            <View style={css.row1}>
                <PlayerMotion style={css.playermotion}/>
                <PlayerControls duration={317}/>
            </View>
        </View>
    )
}

