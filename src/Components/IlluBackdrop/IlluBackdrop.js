import React,{useRef,useEffect,useState} from "react";
import {View,Animated,Image,ImageBackground,findNodeHandle} from "react-native";
import css from "./IlluBackdrop.style";
import {useKey} from "afile";
import {vw,vh} from "css";


export default function IlluBackdrop(props){
    const {images,animation}=props;
    const [width,setWidth]=useState(null);
    const refs={
        illubackdrop:useRef(),
    }
    useEffect(()=>{
        refs.illubackdrop.current.measure((x,y,width)=>{
            setWidth(width);
        })
    },[]);
    return (
        <View ref={refs.illubackdrop} style={css.illubackdrop}>
            {width?images.map((image,i)=>
                <Animated.View style={[css.backdrop,,animation(i),{zIndex:images.length-i}]} key={useKey("backdrop")}>
                    <Image 
                        style={[css.image,{width}]} 
                        source={image} 
                        blurRadius={3}
                    />
                </Animated.View>
            ):
                <ImageBackground
                    style={css.image}
                    source={images[0]} 
                    blurRadius={3}
                />
            }
        </View>
    )
}
