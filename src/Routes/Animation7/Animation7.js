import React from "react";
import {View,Animated,Image,TouchableOpacity as TO} from "react-native";
import css from "./Animation7.style";
import {Player,PlayerMotion} from "components";
import {play1,arrow2} from "assets";



export default function Animation7(){
    return (
        <View style={css.animation7}>
            <View style={css.row0}>
                <Player/>
            </View>
            <View style={css.row1}>
                <PlayerMotion/>
                <View style={css.btns}>
                    <TO><Image style={css.directionbtn} source={arrow2}/></TO>
                    <TO><Image style={css.playbtn} source={play1}/></TO>
                    <TO><Image style={[css.directionbtn,styles.rightarrow]} source={arrow2}/></TO>
                </View>
            </View>
        </View>
    )
}

const styles={
    rightarrow:{
        transform:[{rotateZ:"180deg"}],
    },
}
