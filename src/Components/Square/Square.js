import React,{useState} from "react";
import {View,Text,Animated,TouchableOpacity as TO,StyleSheet} from "react-native";
import css from "./Square.style";


export default function Square({style,reference,onPress}){
    return (
        <Animated.View ref={reference} style={[css.square,style]}>
            <TO style={css.row0} onPress={onPress}>
                <Text style={css.title}>Click to fade me out</Text>
            </TO>
        </Animated.View>
    )
}
