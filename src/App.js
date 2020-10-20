import React from "react";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {Text,View} from "react-native";

export default function App(){
    return (
        <View style={css.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}


