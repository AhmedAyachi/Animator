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
            <View style={css.row0}>
                <AntDesign name="banckward" {...css.arrow} onPress={()=>{
                    if(state.pathindex){
                        state.pathindex--;
                        history.goBack();
                    }
                }}/>
                <Text style={css.title}>Animator</Text>
                <AntDesign name="forward" {...css.arrow} onPress={()=>{
                    if(state.pathindex<length-1){
                        state.pathindex++;
                        history.push(paths[state.pathindex]);
                    }
                }}/>
            </View>
            <View style={css.row1}>
                <Text>{location.pathname}</Text>
            </View>
        </View>
    )
}

const state={
    pathindex:null,
}