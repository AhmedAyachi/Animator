import React from "react";
import {View,Text,Image,Animated} from "react-native";
import css from "./Slide.style";


export default function Slide(props){
    const {title,description,image,scrollx,index}=props;
    return (
        <Animated.View style={[css.slide,styles.slide(scrollx,index)]}>
            <View style={css.row0}>
                <Image style={css.image} source={image}/>
            </View>
            <View style={css.row1}>
                <Text style={css.title}>{title}</Text>
                <Text style={css.description}>{description}</Text>
            </View>
        </Animated.View>
    )
}

const slidewidth=css.slide.width;
const styles={
    slide:(scrollx,index)=>({
        opacity:scrollx.interpolate({
            inputRange:[(index-1)*slidewidth,index*slidewidth,(index+1)*slidewidth],
            outputRange:[0,1,0],
        }),
    }),
}
