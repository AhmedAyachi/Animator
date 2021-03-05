import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./Animation6.style";
import {alchemist0,hairy0,leodark0,nowel0,privor0,samji0,Toyzy0} from "assets";
import {IlluCard,IlluBackdrop} from "components";
import {useKey} from "afile";
import {vw} from "css";


export default function Animation6(){
    const scrollX=useRef(new Animated.Value(0)).current;
    return (
        <View style={css.animation6}>
            <IlluBackdrop 
                animation={(index)=>styles.illbackdrop(scrollX,index)}
                images={illucards.map(illucard=>illucard.image)} 
            />
            <Animated.FlatList
                contentContainerStyle={[css.cardslist,{paddingHorizontal:sharedState.spacerwidth}]}
                showsHorizontalScrollIndicator={false}
                horizontal 
                snapToInterval={sharedState.illucardoffsetwidth}
                decelerationRate={0}
                snapToAlignment="center"
                bounces={false}
                onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
                keyExtractor={()=>useKey("illucard")}
                data={illucards}
                renderItem={({item,index})=>
                    <IlluCard style={[css.illucard,styles.illucard(scrollX,index)]} card={item}/>
                }
            />
        </View>
    )
}

const styles={
    illbackdrop:(scrollX,i)=>({
        width:scrollX.interpolate({
            inputRange:[
                (i-1)*sharedState.illucardoffsetwidth,
                i*sharedState.illucardoffsetwidth,
                (i+1)*sharedState.illucardoffsetwidth,
            ],
            outputRange:["100%","100%","0%"],
            extrapolate:"clamp",
        }),
    }),
    illucard:(scrollX,i)=>({
        transform:[{translateY:scrollX.interpolate({
            inputRange:[
                (i-1)*sharedState.illucardoffsetwidth,
                i*sharedState.illucardoffsetwidth,
                (i+1)*sharedState.illucardoffsetwidth,
            ],
            outputRange:[0,-70,0],
            extrapolate:"clamp",
        })}],
    }),
}

const sharedState=new function(){
    this.illucardwidth=css.illucard.width;
    this.illucardoffsetwidth=(this.illucardwidth+css.illucard.marginHorizontal*2)-0.07*vw;
    this.spacerwidth=(100*vw-this.illucardoffsetwidth)/2;
    return this;
};

const illucards=[
    {title:"Alchemist",image:alchemist0},
    {title:"Hairy",image:hairy0},
    {title:"Leodark",image:leodark0},
    {title:"Nowel",image:nowel0},
    {title:"Privor",image:privor0},
    {title:"Samji",image:samji0},
    {title:"Toyzy",image:Toyzy0},
];