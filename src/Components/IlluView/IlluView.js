import React from "react";
import {View,Text,Image} from "react-native";
import css from "./IlluView.style";


export default function IlluView(props){
    const {card:{title,image}}=props;
    return (
        <View style={css.illuview}>
            <Text style={css.title}>{title}</Text>
            <View style={css.postercontainer}>
                <Image style={css.poster} source={image}/>
            </View>
        </View>
    )
}