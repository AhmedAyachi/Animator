import React,{useState,useRef,useEffect} from "react";
import {View,ImageBackground,FlatList} from "react-native";
import css from "./Animation8.style";
import {BandView} from "components";
import {diewoord0} from "assets";
import {useKey} from "afile";


export default function Animation8(){
    const [dimensions,setDimensions]=useState(null);
    const refs=useRef({
        animation8:useRef(),
    }).current;
    useEffect(()=>{
        refs.animation8.current.measure((x,y,width,height)=>{
            setDimensions({width:width-css.animation8.borderWidth*2,height});
        });
    },[]);
    return (
        <View ref={refs.animation8} style={css.animation8}>
            <ImageBackground style={css.background} source={bands[0].cover} blurRadius={2}>
                {dimensions&&
                    <FlatList 
                        horizontal pagingEnabled
                        contentContainerStyle={css.bandslist}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={()=>useKey("bandview")}
                        data={bands}
                        renderItem={({item})=>
                            <BandView band={item} containerDimensions={dimensions}/>
                        }
                    />
                }
            </ImageBackground>
        </View>
    )
}

const bands=[
    {
        name:"die antwoord",
        cover:diewoord0,
    },
    {
        name:"antwoord die",
        cover:diewoord0,
    },
];