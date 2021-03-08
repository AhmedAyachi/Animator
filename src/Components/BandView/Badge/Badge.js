import React,{useRef} from "react";
import {View,Text,Animated,Easing} from "react-native";
import css from "./Badge.style";
import {FontAwesome} from "@expo/vector-icons"; 
import {useKey} from "afile";
import {Colors} from "estate";


export default function Badge(props){
    const {band,height,containerHeight}=props;
    return (
        <Animated.View style={[css.badge,styles.badge(height,containerHeight)]}>
           <Animated.View style={[css.content,styles.content(height,containerHeight)]}>
                <View style={css.col0}>
                    <View style={css.row0}>
                        {band.name.split(" ").map(text=>
                            <Text style={css.welcome} key={useKey("text")}>{text}</Text>
                        )}
                    </View>
                    <View style={css.row1}>
                        {["overview","about","events"].map(label=>
                            <Text style={[css.label,css[label]]} key={useKey("label")}>{label}</Text>
                        )}
                    </View>
                </View>
                <View style={css.col1}>
                    {["youtube","spotify","soundcloud"].map(name=>
                        <FontAwesome key={useKey("name")} {...css.logo} name={name}/>
                    )}
                    <Text style={css.followus}>follow us</Text>
                </View>
                {/*<View style={css.background}/>*/}
            </Animated.View>
        </Animated.View>
    )
}

const colors=Colors.animation8;
const styles={
    badge:(height,containerHeight)=>({
        height,
        backgroundColor:height.interpolate({
            inputRange:[containerHeight/2,containerHeight],
            outputRange:[colors.primary,"#161726"],
            exterpolate:"clamp",
        }),
    }),
    content:(height,containerHeight)=>({
        height:containerHeight/2,
        transform:[{translateY:height.interpolate({
            inputRange:[containerHeight/2,containerHeight],
            outputRange:[0,-containerHeight/3],
        })}],
        opacity:height.interpolate({
            inputRange:[containerHeight/2,containerHeight],
            outputRange:[1,0],
        }),
    }),
}