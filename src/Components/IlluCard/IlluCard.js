import React from "react";
import {View,Text,Image} from "react-native";
import css from "./IlluCard.style";


export default function IlluCard(props){
    const {card:{title,image}}=props;
    return (
        <View style={css.illucard}>
            <Text style={css.title}>{title}</Text>
            <View style={css.postercontainer}>
                <Image style={css.poster} source={image}/>
            </View>
        </View>
    )
}