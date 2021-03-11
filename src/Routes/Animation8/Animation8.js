import React,{useState,useRef,useEffect} from "react";
import {View,ImageBackground,Animated} from "react-native";
import css from "./Animation8.style";
import {BandView} from "components";
import {diewoord0,worldsaxophone0,yearsnadyears0,tension,sos,houseofzef} from "assets";
import {useKey} from "afile";


export default function Animation8(){
    const [dimensions,setDimensions]=useState(null);
    const scrollX=useRef(new Animated.Value(0)).current;
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
            {dimensions?bands.map((band,i)=>
                <Animated.Image 
                    key={useKey("band")}
                    style={[css.background,{opacity:scrollX.interpolate({
                        inputRange:[(i-1)*dimensions.width,i*dimensions.width,(i+1)*dimensions.width],
                        outputRange:[0,1,0],
                    })}]} 
                    source={band.cover} 
                    blurRadius={5}
                />):
                <ImageBackground
                    style={css.background}
                    source={bands[0].cover}
                    blurRadius={5}
                />
            }
            {dimensions&&
                <Animated.FlatList 
                    horizontal pagingEnabled
                    onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
                    contentContainerStyle={css.bandslist}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={()=>useKey("bandview")}
                    data={bands}
                    renderItem={({item})=>
                        <BandView band={item} containerDimensions={dimensions}/>
                    }
                />
            }
        </View>
    )
}

const bands=[
    {
        name:"world saxophone quartet",
        cover:worldsaxophone0,
        populars:[
            {title:"in a sentimental mood",duration:322},
            {title:"song for camille",duration:464},
            {title:"come sunday",duration:462},
            {title:"the holy men",duration:168},
        ],
        albums:[],
    },
    {
        name:"years & years",
        cover:yearsnadyears0,
        populars:[],
        albums:[],
    },
    {
        name:"die antwoord",
        cover:diewoord0,
        populars:[
            {title:"ugly boy",duration:213},
            {title:"baby's on fire",duration:288},
            {title:"i fink u freeky",duration:236},
            {title:"cookie thumper!",duration:280},
        ],
        albums:[
            {name:"ten$ion",cover:tension},
            {name:"$O$",cover:sos},
            {name:"house of zef",cover:houseofzef},
        ],
    },
];