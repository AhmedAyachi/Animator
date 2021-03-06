import React,{useRef,useMemo,useEffect} from "react";
import {View,Image,Animated,TouchableOpacity as TO,Easing} from "react-native";
import css from "./PlayerControls.style";
import PlayerTimer from "./PlayerTimer/PlayerTimer";
import {play1,arrow2} from "assets";
import * as H from "./Hooks";


export default function PlayerControls(props){
    const {duration}=props;
    const refs={
        timebar:useRef(),
    }
    const [progress,timebarwidth,animation]=H.useProgressBar(duration,refs.timebar);
    return (
        <View style={css.playercontrols}>
            <View style={css.row0}>
                <PlayerTimer 
                    duration={duration}
                    timebarRef={refs.timebar} 
                    barwidth={progress}
                    timebarwidth={timebarwidth}
                />
            </View>
            <View style={css.row1}>
                <TO><Image style={css.directionbtn} source={arrow2}/></TO>
                <TO onPress={()=>{animation.stop()}}><Image style={css.playbtn} source={play1}/></TO>
                <TO><Image style={[css.directionbtn,styles.rightarrow]} source={arrow2}/></TO>
            </View>
        </View>
    )
}

const styles={
    rightarrow:{
        transform:[{rotateZ:"180deg"}],
    },
}