import React,{useRef} from "react";
import {View,Animated,Easing} from "react-native";
import css from "./BandView.style";
import Badge from "./Badge/Badge";
import BandProber from "./BandProber/BandProber";


export default function BandView(props){
    const {band,containerDimensions}=props;
    const height=useRef(new Animated.Value(containerDimensions.height/2)).current;
    Animated.timing(height,{
        toValue:containerDimensions.height,
        duration:1000,
        easing:Easing.sin,
        useNativeDriver:false,
    }).start();
    return (
        <View style={[css.bandview,styles.bandview(containerDimensions)]}>
            <Badge band={band} height={height} containerHeight={containerDimensions.height}/>
            <BandProber band={band} height={height} containerHeight={containerDimensions.height}/>
        </View>
    )
}

const styles={
    bandview:({width,height})=>({width,height}),
}