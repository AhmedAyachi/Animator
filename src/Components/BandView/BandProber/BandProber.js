import React from "react";
import {Animated,Text,Image} from "react-native";
import css from "./BandProber.style";


export default function BandProber(props){
    const {band,height,containerHeight}=props;
    return (
        <Animated.View style={[css.bandprober,styles.bandprober(height,containerHeight)]}>
            <Text style={{color:"white"}}>Hello</Text>
        </Animated.View>
    )
}

const styles={
    bandprober:(height,containerHeight)=>({
        height:height.interpolate({
            inputRange:[containerHeight*0.9,containerHeight],
            outputRange:["0%","100%"],
        }),
        opacity:height.interpolate({
            inputRange:[containerHeight*0.9,containerHeight],
            outputRange:[0,1],
        }),
    }),
}