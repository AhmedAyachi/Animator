import React,{useRef,useState} from "react";
import {View,Text,Animated} from "react-native";
import css from "./Indicator.style";
import {useKey} from "afile";


export default function Indicator(porps){
    const {length=1,scrollx}=porps;
    const [width,setWidth]=useState();
    return (
        <View style={css.indicator} onLayout={(event)=>{
            setWidth(event.nativeEvent.layout.width);
        }}>
            {width&&getBalls(length,scrollx,width)}
        </View>
    )
}

const getBalls=(length,scrollx,width)=>{
    const balls=[];
    for(let i=0;i<length;i++){
        const scale=scrollx.interpolate({
            inputRange:[(i-1)*width,i*width,(i+1)*width],
            outputRange:[0.8,1.4,0.8],
            extrapolate:"clamp",
        });
        const opacity=scrollx.interpolate({
            inputRange:[(i-1)*width,i*width,(i+1)*width],
            outputRange:[0.5,1,0.5],
            extrapolate:"clamp",
        });
        balls.push(
            <Animated.View style={[css.ball,styles.ball(opacity,scale)]} key={useKey("ball")}/>
        );
    }
    return balls;
}

const styles={
    ball:(opacity,scale)=>({
        opacity,
        transform:[{scale}],
    }),
}