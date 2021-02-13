import {StatusBar} from "expo-status-bar";
import React from "react";
import {Text,View} from "react-native";
import css from "./App.style";

export default function App(){
    return (
        <View style={css.container}>
            <Text>App created with create-expo-app command</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
