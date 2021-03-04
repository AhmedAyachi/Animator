import React from "react";
import {View,Animated,Image,TouchableOpacity as TO} from "react-native";
import css from "./Animation7.style";
import {Player,MotionBar} from "components";
import {play1,arrow2} from "assets";
import {useKey} from "afile";


export default function Animation7(){
    return (
        <View style={css.animation7}>
            <View style={css.row0}>
                <Player/>
            </View>
            <View style={css.row1}>
                <View style={css.motion}>{getMotionBars()}</View>
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

const getMotionBars=(length=20)=>{
    const bars=[];
    for(let i=0;i<length;i++){
        bars.push(<MotionBar key={useKey("motionbar")}/>)
    }
    return bars;
}
