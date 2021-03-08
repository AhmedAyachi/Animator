import React from "react";
import {View,Text} from "react-native";
import css from "./Badge.style";
import {FontAwesome} from "@expo/vector-icons"; 
import {useKey} from "afile";


export default function Badge(props){
    const {band}=props;
    return (
        <View style={css.badge}>
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
            <View style={css.background}/>
        </View>
    )
}