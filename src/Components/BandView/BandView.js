import React,{useRef} from "react";
import {View,Animated,Easing,TouchableWithoutFeedback as TWF} from "react-native";
import css from "./BandView.style";
import Badge from "./Badge/Badge";
import BandProber from "./BandProber/BandProber";
import * as H from "./Hooks";


export default function BandView(props){
    const {band,containerDimensions}=props;
    const [height,animation]=H.useSwipeAnimation(containerDimensions.height);
    
    return (
        <TWF onPress={()=>{animation.start()}}>
            <View style={[css.bandview,styles.bandview(containerDimensions)]}>
                <Badge band={band} height={height} containerHeight={containerDimensions.height}/>
                <BandProber band={band} height={height} containerHeight={containerDimensions.height}/>
            </View>
        </TWF>
    )
}

const styles={
    bandview:({width})=>({width,height:"100%"}),
}