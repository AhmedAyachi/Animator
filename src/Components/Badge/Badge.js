import React,{useEffect,useState} from "react";
import {Animated} from "react-native";
import css from "./Badge.style";


export default function Badge(props){
    const {scrollx,parentRef}=props;
    const [parentwidth,setParentWidth]=useState();
    const refs={
        badge:React.useRef(),
    }
    useEffect(()=>{
        parentRef.current.measure((x,y,width)=>{
            setParentWidth(width);
        });
    },[]);
   
    return parentwidth?
        <Animated.View ref={refs.badge} style={[css.badge,styles.badge(scrollx,parentwidth)]}/>:
        <></>
}

const styles={
    badge:(scrollx,width)=>({
        transform:[{rotateZ:Animated.divide(Animated.modulo(scrollx,width),width).
            interpolate({
                inputRange:[0,0.5,1],
                outputRange:["-45deg","90deg","135deg"],
                extrapolate:"clamp",
            })    
        }],
    }),
}