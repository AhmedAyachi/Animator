import React,{useRef,useState} from "react";
import {Animated,View,Text,Image} from "react-native";
import css from "./UserTab.style";
import {useKey} from "afile";
import * as H from "./Hooks";


export default function UserTab(props){
    const {user,scrollY,containerRef}=props;
    const refs={
        usertab:useRef(),
    }
    const style=H.useCollapse(refs.usertab,containerRef,scrollY);
    return (
        <Animated.View ref={refs.usertab} style={[css.usertab,style]}>
            <View style={css.col0}>
                <Image style={css.userimage} source={user.image}/>
            </View>
            <View style={css.col1}>
                {["name","job","email"].map(prop=>
                    <Text style={[css[`user${prop}`],{flexWrap:"nowrap"}]} key={useKey("prop")} numberOfLines={1}>{user[prop]}</Text>
                )}
            </View>
        </Animated.View>
    )
}
