import React from "react";
import {View} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {Route} from "react-router-native";
import {Header} from "components";
import * as Animations from "routes";
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

const routes=Object.values(Animations).reverse();