import React from "react";
import {View,Text,Animated} from "react-native";
import css from "./Animation4.style";
import {UserTab} from "components";
import {keanureeves} from "assets";
import {LinearGradient} from "expo-linear-gradient";


export default function Animation4(props){
    const {}=props;
    return (
        <View style={css.animation4}>
            <LinearGradient style={css.background} colors={["#dfdfdf","#ff9e9e"]} locations={[0,1]}/>
            <Animated.FlatList
                contentContainerStyle={css.list}
                data={users}
                renderItem={({item})=><UserTab user={item}/>}
            />
        </View>
    )
}


const users=new Array(6).fill(
    {
        name:"Keanu Reeves",
        image:keanureeves,
        job:"Actor",
        email:"KeanuReeves6114@gmail.com",
    },
);