import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./BandView.style";
import Badge from "./Badge/Badge";


export default function BandView(props){
    const {band,containerDimensions}=props;
    //const height=useRef(Animated.Value(containerDimensions.h)).current;
    return (
        <View style={[css.bandview,styles.bandview(containerDimensions)]}>
            <Badge band={band}/>
        </View>
    )
}

const styles={
    bandview:({width,height})=>({width,height}),
}