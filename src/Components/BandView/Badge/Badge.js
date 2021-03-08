import React,{useRef} from "react";
import {View,Text,Animated,Easing} from "react-native";
import css from "./Badge.style";
import {FontAwesome} from "@expo/vector-icons"; 
import {useKey} from "afile";
import {Colors} from "estate";


export default function Badge(props){
    const {band,height,containerHeight}=props;
    return (
        <Animated.View style={css.badge}>
            <Animated.View style={[css.background,styles.background(height,containerHeight)]}/>
            <Animated.View style={[css.content,{height:height._value}]}>
                <View style={css.col0}>
                    <Animated.View style={[css.row0,styles.content(height,containerHeight)]}>
                        {band.name.split(" ").map(text=>
                            <Text style={css.welcome} key={useKey("text")}>{text}</Text>
                        )}
                    </Animated.View>
                    <Animated.View style={css.row1}>
                        {["overview","about","events"].map(label=>
                            <Text style={[css.label,css[label]]} key={useKey("label")}>{label}</Text>
                        )}
                    </Animated.View>
                </View>
                <Animated.View style={[css.col1,styles.content(height,containerHeight)]}>
                    {["youtube","spotify","soundcloud"].map(name=>
                        <FontAwesome key={useKey("name")} {...css.logo} name={name}/>
                    )}
                    <Text style={css.followus}>follow us</Text>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

const colors=Colors.animation8;
const styles={
    content:(height,containerHeight)=>({
        transform:[{translateY:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[0,-100],
        })}],
        opacity:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[1,0],
        }),
    }),
    background:(height,containerHeight)=>({
        height,
        backgroundColor:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[colors.primary,"#161726"],
            exterpolate:"clamp",
        }),
        opacity:height.interpolate({
            inputRange:[height._value,containerHeight],
            outputRange:[0.5,1],
        }),
    })
}