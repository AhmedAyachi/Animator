import React,{useRef,useState} from "react";
import {View,LayoutAnimation,Platform,UIManager} from "react-native";
import css from "./BandView.style";
import Badge from "./Badge/Badge";
import BandProber from "./BandProber/BandProber";
import * as H from "./Hooks";


export default function BandView(props){
    const {band,containerDimensions}=props;
    const [probed,setProbed]=useState(false);
    const [flexDirection,setFlexDirection]=useState("column");
    const [height,animation]=H.useSwipeAnimation(containerDimensions.height,probed);
    return (
        <View style={[css.bandview,styles.bandview(containerDimensions)]}>
            <Badge 
                band={band} 
                height={height} 
                containerHeight={containerDimensions.height}
                onSwipeUp={()=>{
                    if(!probed){
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setFlexDirection("row");
                        animation.start(({finished})=>{
                            finished&&setProbed(true);
                        });
                    }
                }}
            />
            <BandProber 
                band={band} 
                height={height} 
                flexDirection={flexDirection}
                containerHeight={containerDimensions.height}
                probed={probed}
                onClose={()=>{
                    if(probed){
                        console.log(LayoutAnimation.Presets.spring);
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        setFlexDirection("column");
                        animation.start(({finished})=>{
                            finished&&setProbed(false);
                        });
                    }
                }}
            />
        </View>
    )
}

const styles={
    bandview:({width})=>({width}),
}