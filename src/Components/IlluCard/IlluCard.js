import React from "react";
import {View,Animated,Image,Text} from "react-native";
import css from "./IlluCard.style";


export default function IlluCard(props){
    const {card:{title,image},style}=props;
    return (
        <Animated.View style={[css.illucard,style]}>
            <View style={css.row0}>
                <Image style={css.image} source={image}/>
            </View>
            <View style={css.row1}>
                <Text style={css.title} numberOfLines={1}>{title}</Text>
            </View>
        </Animated.View>
    )
}