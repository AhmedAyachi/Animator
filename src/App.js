import React from "react";
import {ScrollView} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {Route} from "react-router-native";
import {Header} from "components";
import {Animation0,Animation1,Animation2,Animation3,Animation4} from "routes";
import {useKey} from "afile";


export default function App(){
    return (
        <ScrollView contentContainerStyle={css.app}>
            <StatusBar style="auto"/>
            <Header paths={routes.map((route,i)=>`/${i||""}`)}/>
            {routes.map((Component,i)=>
                <Route 
                    key={useKey("route")}
                    exact path={`/${i||""}`} 
                    render={()=><Component/>}
                />
            )}
        </ScrollView>
    );
}

const routes=[Animation0,Animation1,Animation2,Animation3,Animation4];