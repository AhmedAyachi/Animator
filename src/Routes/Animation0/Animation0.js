import React,{useState} from "react";
import {View,TouchableOpacity as TO,Animated} from "react-native";
import css from "./Animation0.style";
import {AntDesign} from "@expo/vector-icons";


export default function Animation0(){
    const [forward,setForward]=useState(true);
    const {animation,value}=css.rotation(forward);
    return (
        <View style={css.animation0}>
            <Animated.View style={css.homebutton(value)}>
                <Animated.View style={css.button(value)}>
                    <TO onPress={()=>{animation.start(()=>{
                        setForward(!forward);
                    })}}>
                        <AntDesign {...css.arrow}/>
                    </TO>
                </Animated.View>
            </Animated.View>
        </View>
    )
}