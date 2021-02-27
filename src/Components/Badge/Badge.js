import React from "react";
import {View} from "react-native";
import css from "./Badge.style";


export default function Badge(props){
    const {scrollx}=props;
    return (
        <View style={[css.badge,{transform:[{rotateZ:`-4${scrollx._value}deg`}]}]}/>
    )
}

const styles={

}