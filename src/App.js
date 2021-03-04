import React from "react";
import {View} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {Route} from "react-router-native";
import {Header} from "components";
import {Animation0,Animation1,Animation2,Animation3,Animation4,Animation5,Animation6,Animation7} from "routes";
import {useKey} from "afile";


export default function App(){
    return (
        <View style={css.app}>
            <StatusBar style="inverted"/>
            <Header paths={routes.map((route,i)=>`/${i||""}`)}/>
            {routes.map((Component,i)=>
                <Route 
                    key={useKey("route")}
                    exact path={`/${i||""}`} 
                    component={Component}
                />
            )}
        </View>
    );
}

const routes=[
    Animation0,Animation1,Animation2,Animation3,Animation4,
    Animation5,Animation6,Animation7,
];