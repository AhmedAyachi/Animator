import React from "react";
import {View,Text,Animated,TouchableOpacity as TO} from "react-native";
import css from "./SongView.style";
import {FontAwesome,Ionicons} from "@expo/vector-icons"; 
import {getMinutes,getSeconds} from "estate";
import * as H from "./Hooks";


export default function SongView(props){
    const {song:{title,duration}}=props;
    const [width,opacity,playing,animation]=H.usePlayingAnimation(duration);
    return (
        <View style={css.songview} onTouchStart={()=>{
            animation.start();
        }}>
            <View style={css.row0}>
            {playing&&
                <Animated.View style={[css.stopbtn,{opacity}]}>
                    <TO onPress={()=>{animation.toggle()}}><Ionicons {...css.stopbtnicon} name="md-musical-note-sharp"/></TO>
                </Animated.View>
            }
                <Text style={[css.title,styles.title(playing)]}>{title}</Text>
                <Text style={[css.duration,styles.duration(playing)]}>{getMinutes(duration)}:{getSeconds(duration)}</Text>
            </View>
            <View style={css.row1}>
            {playing&&
                <Animated.View style={[css.progressbarbg,{opacity}]}>
                    <Animated.View style={[css.progressbar,styles.progressbar(width)]}/>
                </Animated.View>
            }
            </View>
        </View>
    )
}

const styles={
    progressbar:(width)=>({
        width:width.interpolate({
            inputRange:[width.from,width.to],
            outputRange:[css.progressbar.width,"100%"],
        }),
    }),
    title:(playing)=>({
        color:playing?"white":css.title.color,
    }),
    duration:(playing)=>({
        color:playing?"white":css.title.color,
    }),
}