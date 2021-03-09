import React from "react";
import {Platform,UIManager} from "react-native";
import {NativeRouter} from "react-router-native";
import {registerRootComponent} from "expo";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Reducer from "./Store";
import App from "./App";
import {useCustomFonts} from "./index.style";


const store=createStore(Reducer,composeWithDevTools());
if(Platform.OS==="android"&&UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

registerRootComponent(()=>{
    const fontsloaded=useCustomFonts();
    return (fontsloaded&&
        <Provider store={store}>
            <NativeRouter>
                <App/>
            </NativeRouter>
        </Provider>
    )
});