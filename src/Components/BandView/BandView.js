import React,{useState} from "react";
import {View,LayoutAnimation} from "react-native";
import css from "./BandView.style";
import Badge from "./Badge/Badge";
import BandProber from "./BandProber/BandProber";
import * as H from "./Hooks";


export default function BandView(props){
    const {band,listRef,containerDimensions}=props;
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
                        listRef.current.setNativeProps({
                            scrollEnabled:false,
                        });
                        LayoutAnimation.easeInEaseOut();
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
                        listRef.current.setNativeProps({
                            scrollEnabled:true,
                        });
                        LayoutAnimation.configureNext(layoutconfig);
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

const layoutconfig={
    duration:850,
    update:{
        type:LayoutAnimation.Types.easeIn,
    },
    create:{
        type:LayoutAnimation.Types.easeOut,
        property:LayoutAnimation.Properties.opacity,
    },
    delete:{
        type:LayoutAnimation.Types.easeIn,
        property:LayoutAnimation.Properties.opacity,
        duration:300,
    },
};
const styles={
    bandview:({width})=>({width}),
}