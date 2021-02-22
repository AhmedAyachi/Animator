import React,{useRef} from "react";
import {View,TouchableWithoutFeedback as TWF,Animated,Text} from "react-native";
import css from "./Animation1.style";
import {Square} from "components";
import {fadeOut,fadeIn} from "afile";


export default function Animation1({style}){
    const opacity=useRef(new Animated.Value(1)).current;
    const fadeOutAnim=fadeOut(opacity);
    const fadeInAnim=fadeIn(opacity);
    const refs={
        square:useRef(),
    }
    return (
        <View style={[css.animation1,style]}>
            <TWF onPress={()=>{
                   fadeInAnim.start(refs.square.current);
                }}>
                <View style={css.box}>
                    <Text style={css.boxmsg}>Click to fade him in</Text>
                </View>
            </TWF>
            <Square 
                reference={refs.square} 
                style={{opacity}} 
                onPress={()=>{fadeOutAnim.start(refs.square.current)}}
            />
        </View>
    )
}