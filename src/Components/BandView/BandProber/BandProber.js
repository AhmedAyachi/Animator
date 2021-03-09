import React,{useState,useEffect} from "react";
import {Animated,Text,Image,Platform,UIManager,LayoutAnimation} from "react-native";
import css from "./BandProber.style";
import {useKey} from "afile";
import {rem,border,vh} from "css";


export default function BandProber(props){
    const {band,height,containerHeight}=props;
    const [flexDirection,setFlexDirection]=useState("column");
    useEffect(()=>{
        let isMounted=true;
        height.addListener(({value})=>{
            if(isMounted&&flexDirection==="column"&&value>=sharedState.getOnValue(containerHeight)){
                alert("anim");
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setFlexDirection("row");
            }
            else{
                height.removeAllListeners();
            }
        });
        return ()=>{
            isMounted=false;
        }
    },[]);
    return (
        <Animated.View style={[css.bandprober,styles.bandprober(height,containerHeight)]}>
            <Animated.View style={[css.row0,{flexDirection}]}>
                {["overview","about","events"].map(label=>
                    <Text style={[css.label,css[label]]} key={useKey("label")}>{label}</Text>
                )}
            </Animated.View>
            {/*<Animated.View style={[css.row1,{display:flexDirection==="row"?"flex":"none"},styles.row1(height,containerHeight)]}>
                <Text >Hello</Text>
                </Animated.View>*/}
        </Animated.View>
    )
}

const sharedState={
    getOnValue:(containerHeight)=>containerHeight*0.85,
}

if(Platform.OS==="android"&&UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles={
    bandprober:(height,containerHeight)=>({
        height:height.interpolate({
            inputRange:[containerHeight*0.7,containerHeight],
            outputRange:[100,containerHeight],
            extrapolate:"clamp",
        }),
        bottom:height.interpolate({
            inputRange:[containerHeight*0.7,containerHeight],
            outputRange:["10%","0%"],
            extrapolate:"clamp",
        }),
    }),
    row1:(height,containerHeight)=>({
        opacity:height.interpolate({
            inputRange:[sharedState.getOnValue(containerHeight),containerHeight],
            outputRange:[0,1],
        }),
    }),
}