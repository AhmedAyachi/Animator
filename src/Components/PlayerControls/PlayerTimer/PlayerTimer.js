import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./PlayerTimer.style";
import Timer from "./Timer/Timer";
import * as H from "./Hooks";


export default function PlayerTimer(props){
    const {duration}=props;
    const refs=useRef({
        timebar:useRef(),
    }).current;
    const [progress,timebarwidth]=H.useProgressBar(duration,refs.timebar);
    return (
        <View style={css.playertimer}>
            {timebarwidth&&
                <Timer duration={duration} barwidth={progress} timebarwidth={timebarwidth}/>
            }
            <View ref={refs.timebar} style={css.timebar}>
                <Animated.View style={[css.playedbar,{width:progress}]}/>
            </View>
        </View>
    )
}

const styles={
    playedbar:(scaleX)=>({
        transform:[
            {scaleX}
        ],
    }),
}