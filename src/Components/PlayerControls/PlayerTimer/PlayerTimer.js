import React from "react";
import {View,Animated} from "react-native";
import css from "./PlayerTimer.style";
import Timer from "./Timer/Timer";


export default function PlayerTimer(props){
    const {duration,timebarRef,timebarwidth,barwidth}=props;
    return (
        <View style={css.playertimer}>
            {timebarwidth&&
                <Timer duration={duration} barwidth={barwidth} timebarwidth={timebarwidth}/>
            }
            <View ref={timebarRef} style={css.timebar}>
                <Animated.View style={[css.playedbar,{width:barwidth}]}/>
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