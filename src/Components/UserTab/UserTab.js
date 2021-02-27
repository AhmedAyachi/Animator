import React from "react";
import {Animated,View,Text,Image} from "react-native";
import css from "./UserTab.style";


export default function UserTab(props){
    const {user}=props;
    return (
        <Animated.View style={css.usertab}>
            <View style={css.col0}>
                <Image style={css.userimage} source={user.image}/>
            </View>
            <View style={css.col1}>
                {["name","job","email"].map(prop=>
                    <Text style={[css[`user${prop}`],{marginBottom:1}]} numberOfLines={1}>{user[prop]}</Text>
                )}
            </View>
        </Animated.View>
    )
}
