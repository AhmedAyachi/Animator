import React,{useRef,useEffect,useState} from "react";
import {View,Animated,ImageBackground} from "react-native";
import css from "./Animation5.style";
import {IlluView} from "components";
import {alchemist0,hairy0,leodark0,nowel0,privor0,samji0,Toyzy0} from "assets";
import {useKey} from "afile";


export default function Animation5(){
    const scrollX=useRef(new Animated.Value(0)).current;
    const [width,setWidth]=useState(null);
    const refs={
        animation5:useRef(),
    }
    useEffect(()=>{
        refs.animation5.current.measure((x,y,width,height)=>{
            setWidth(width);
        });
    },[]);
    return (
        <View ref={refs.animation5} style={css.animation5}>
            {width?illuviews.map((illuview,i)=>
                <Animated.Image 
                    key={useKey("illuview")}
                    style={[css.background,{opacity:scrollX.interpolate({
                        inputRange:[(i-1)*width,i*width,(i+1)*width],
                        outputRange:[0,1,0],
                    })}]} 
                    source={illuview.image} 
                    blurRadius={50}
                />):
                <ImageBackground
                    style={css.background}
                    source={illuviews[0].image}
                    blurRadius={50}
                />
            }
            <Animated.FlatList
            horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
            contentContainerStyle={css.cardlist}
                keyExtractor={()=>useKey("illuview")}
                data={illuviews}
                renderItem={({item})=><IlluView scrollX={scrollX} card={item}/>}
            />
        </View>
    )
}

const illuviews=[
    {title:"Alchemist",image:alchemist0},
    {title:"Hairy",image:hairy0},
    {title:"Leodark",image:leodark0},
    {title:"Nowel",image:nowel0},
    {title:"Privor",image:privor0},
    {title:"Samji",image:samji0},
    {title:"Toyzy",image:Toyzy0},
];