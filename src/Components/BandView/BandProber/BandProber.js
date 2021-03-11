import React from "react";
import {Text,Animated,TouchableOpacity as TO} from "react-native";
import css from "./BandProber.style";
import {AntDesign} from "@expo/vector-icons";
import SongSection from "./SongSection/SongSection";
import AlbumSection from "./AlbumSection/AlbumSection";
import {useKey} from "afile";


export default function BandProber(props){
    const {band,height,containerHeight,flexDirection,onClose}=props;
    return (
        <Animated.View style={[css.bandprober,styles.bandprober(height,containerHeight)]}>
            <Animated.View style={[css.row0,{flexDirection}]}>
                {["overview","about","events"].map(label=>
                    <Text style={[css.label,css[label]]} key={useKey("label")}>{label}</Text>
                )}           
            </Animated.View>
            <Animated.View style={[css.row1,styles.row1(height,containerHeight,flexDirection)]}>
                <Animated.View style={css.row2}>
                    <SongSection songs={band.populars}/>
                </Animated.View>
                <Animated.View style={css.row3}>
                    <AlbumSection albums={band.albums}/>
                    <TO><AntDesign {...css.closebtn} name="arrowdown" onTouchEnd={onClose}/></TO>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

const sharedState={
    getOnValue:(containerHeight)=>containerHeight*0.6,
}

const styles={
    bandprober:(height,containerHeight)=>({
        height:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[css.bandprober.height,containerHeight*0.97],
            extrapolate:"clamp",
        }),
    }),
    row1:(height,containerHeight,flexDirection)=>({
        display:flexDirection?"flex":"none",
        opacity:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[0,1],
        }),
    }),
}