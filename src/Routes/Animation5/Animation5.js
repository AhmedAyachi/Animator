import React,{useRef,useEffect,useState} from "react";
import {View,Animated,ImageBackground} from "react-native";
import css from "./Animation5.style";
import {IlluView} from "components";
import {perrot0,snake0,cat0,bovid0,eagle0,horse0,owl0} from "assets";
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
            disableIntervalMomentum={true}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
            contentContainerStyle={css.viewslist}
                keyExtractor={()=>useKey("illuview")}
                data={illuviews}
                renderItem={({item})=><IlluView scrollX={scrollX} illustration={item}/>}
            />
        </View>
    )
}

const illuviews=[
    {title:"Parrot",image:perrot0},
    {title:"Snake",image:snake0},
    {title:"Cat",image:cat0},
    {title:"Bovid",image:bovid0},
    {title:"Eagle",image:eagle0},
    {title:"Horse",image:horse0},
    {title:"Owl",image:owl0},
];