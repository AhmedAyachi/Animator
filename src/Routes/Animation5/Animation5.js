import React,{useRef,useEffect,useState} from "react";
import {View,Animated,findNodeHandle} from "react-native";
import css from "./Animation5.style";
import {IlluCard} from "components";
import {alchemist0,hairy0,leodark0,nowel0,privor0,samji0,Toyzy0} from "assets";
import {useKey} from "afile";


export default function Animation5(props){
    const {}=props;
    const scrollX=useRef(new Animated.Value(0)).current;
    const [opacities,setOpacities]=useState(new Array(illucards.length).fill(1));
    return (
        <View style={css.animation5}>
            {[...illucards].reverse().map((illucard,i)=>
                <Animated.Image 
                    key={useKey("illucard")}
                    style={[css.background,{opacity:opacities[i]}]} 
                    source={illucard.image} 
                    blurRadius={20} 
                    onLayout={(event=>{
                        const {width}=event.nativeEvent.layout;
                        opacities[i]=scrollX.interpolate({
                            inputRange:[0,i*width],
                            outputRange:[1,0],
                        });
                        setOpacities([...opacities]);
                    })}
                />
            )}
            <Animated.FlatList
            horizontal pagingEnabled 
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
            contentContainerStyle={css.cardlist}
                keyExtractor={()=>useKey("illucard")}
                data={illucards}
                renderItem={({item})=><IlluCard scrollX={scrollX} card={item}/>}
            />
        </View>
    )
}

const illucards=[
    {title:"Alchemist",image:alchemist0},
    {title:"Hairy",image:hairy0},
    {title:"Leodark",image:leodark0},
    {title:"Nowel",image:nowel0},
    {title:"Privor",image:privor0},
    {title:"Samji",image:samji0},
    {title:"Toyzy",image:Toyzy0},
];