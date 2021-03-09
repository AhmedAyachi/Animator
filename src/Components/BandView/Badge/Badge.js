import React,{useRef} from "react";
import {View,Text,Animated,Easing,TouchableWithoutFeedback as TWF} from "react-native";
import css from "./Badge.style";
import {FontAwesome} from "@expo/vector-icons"; 
import {useKey} from "afile";
import {vh} from "css";
import {Colors} from "estate";


export default function Badge(props){
    const {band,height,containerHeight,onSwipeUp}=props;
    return (
        <TWF onPress={onSwipeUp}>
        <Animated.View style={css.badge}>
            <Animated.View style={[css.background,styles.background(height,containerHeight)]}/>
            <Animated.View style={[css.content,styles.content(height,containerHeight)]}>
                <View style={css.col0}>
                    {band.name.split(" ").map(text=>
                        <Text style={css.bandname} key={useKey("text")}>{text}</Text>
                    )}
                </View>
                <View style={css.col1}>
                    {["youtube","spotify","soundcloud"].map(name=>
                        <FontAwesome key={useKey("name")} {...css.logo} name={name}/>
                    )}
                    <Text style={css.followus}>follow us</Text>
                </View>
            </Animated.View>
        </Animated.View>
        </TWF>
    )
}

const colors=Colors.animation8;
const styles={
    content:(height,containerHeight)=>({
        height:containerHeight/2,
        transform:[{translateY:height.interpolate({
            inputRange:[containerHeight/2,containerHeight*0.8],
            outputRange:[0,-20*vh],
        })}],
        opacity:height.interpolate({
            inputRange:[containerHeight/2,containerHeight*0.7],
            outputRange:[1,0],
        }),
    }),
    background:(height,containerHeight)=>({
        height,
        backgroundColor:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[colors.primary,colors.background],
            exterpolate:"clamp",
        }),
        opacity:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[0.5,1],
        }),
    })
}