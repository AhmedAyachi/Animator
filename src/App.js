import React from "react";
import {Text,ScrollView} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";


export default function App(){
    return (
        <ScrollView contentContainerStyle={css.app}>
            <Text>App created with create-expo-app command</Text>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}
