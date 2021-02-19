import React from "react";
import {registerRootComponent} from "expo";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Reducer from "./Store";
import App from "./App";


const store=createStore(Reducer,composeWithDevTools());

registerRootComponent(()=>(
    <Provider store={store}>
        <App/>
    </Provider>
));