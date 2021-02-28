import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./Animation4.style";
import {UserTab} from "components";
import {profile0,profile1,profile2,profile3} from "assets";
import {LinearGradient} from "expo-linear-gradient";
import {useKey} from "afile";


export default function Animation4(props){
    const {}=props;
    const scrollY=useRef(new Animated.Value(0)).current;
    const refs={
        usertablist:useRef(),
    }
    return (
        <View style={css.animation4}>
            <LinearGradient style={css.background} colors={["#dfdfdf","#ff599c"]} locations={[0,1]}/>
            {<Animated.FlatList
                nestedScrollEnabled={false}
                ref={refs.usertablist}
                contentContainerStyle={css.list}
                onScroll={Animated.event([{nativeEvent:{contentOffset:{y:scrollY}}}],{useNativeDriver:false})}
                data={users.concat([...users,...users])}
                keyExtractor={()=>useKey("usertab")}
                renderItem={({item})=><UserTab containerRef={refs.usertablist} scrollY={scrollY} user={item}/>}
            />}
        </View>
    )
}


const users=[
    {
        name:"Steve Lowe",
        image:profile1,
        job:"Customer Branding Planner",
        email:"stevelowe412@gmail.com",
    },
    {
        name:"Camille Jaskolski",
        image:profile3,
        job:"Customer Identify Associate",
        email:"camijask47856@gmail.com",
    },
    {
        name:"Keanu Reeves",
        image:profile0,
        job:"Actor",
        email:"keanureeves6114@gmail.com",
    },
    {
        name:"Sophia Flatley",
        image:profile2,
        job:"Dynamic Accounts Facilitator",
        email:"sophia_flatley@gmail.com",
    },
];