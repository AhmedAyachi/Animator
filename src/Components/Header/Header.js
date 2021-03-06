import React,{useEffect} from "react";
import {View,Text} from "react-native";
import css from "./Header.style";
import {AntDesign} from "@expo/vector-icons";
import {useHistory,useLocation} from "react-router-native";


export default function Header(props){
    const {paths}=props,{length}=paths;
    useEffect(()=>{
        paths.find((path,i)=>{
            const status=path===location.pathname;
            if(status){
                state.pathindex=i;
            };
            return status;
        });
    },[]);
    const location=useLocation();
    const history=useHistory();
    return (
        <View style={css.header}>
            <AntDesign name="banckward" {...css.arrow} onPress={()=>{
                if(state.pathindex){
                    state.pathindex--;
                    history.goBack();
                }
            }}/>
            <AntDesign name="forward" {...css.arrow} onPress={()=>{
                if(state.pathindex<length-1){
                    state.pathindex++;
                    history.push(paths[state.pathindex]);
                }
            }}/>
        </View>
    )
}

const state={
    pathindex:null,
}