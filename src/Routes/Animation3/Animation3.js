import React from "react";
import {View,Animated} from "react-native";
import css from "./Animation3.style";
import {bird0,bottle0,controller0,energy0} from "assets";
import {Slide,Badge,Indicator} from "components";
import * as H from "./Hooks";
import {width} from "css";


export default function Animation3(props){
    const {}=props;
    const [scrollx,onScroll]=H.useScroll();
    return (
        <Animated.View style={[css.animation3,props.style,styles.animation3(scrollx)]}>
            <Badge scrollx={scrollx}/>
            <Animated.FlatList horizontal
                contentContainerStyle={css.list} 
                scrollEventThrottle={100}
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false} 
                pagingEnabled
                data={sliders} 
                renderItem={({item,index})=><Slide index={index} scrollx={scrollx} {...item}/>}
            />
            <Indicator scrollx={scrollx} length={sliders.length}/>
        </Animated.View> 
    )
}

const styles={
    animation3:(scrollx)=>({
        backgroundColor:scrollx.interpolate({
            inputRange:sliders.map((slider,i)=>i*width),
            outputRange:sliders.map(slider=>slider.color),
        }),
    }),
}

const sliders=[
    {
        key:"3571572",
        title:"Multi-lateral intermediate moratorium",
        description:"I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        image:controller0,
        color:"#a5bbff",
    },
    {
        key:"3571747",
        title:"Automated radical data-warehouse",
        description:"Use the optical SAS system, then you can navigate the auxiliary alarm!",
        image:energy0,
        color:"#ddbefe",
    },
    {
        key:"3571680",
        title:"Inverse attitude-oriented system engine",
        description:"The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        image:bottle0,
        color:"#ff63ed",
    },
    {
        key:"3571603",
        title:"Monitored global data-warehouse",
        description:"We need to program the open-source IB interface!",
        image:bird0,
        color:"#b98eff",
    },
]