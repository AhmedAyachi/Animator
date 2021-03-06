import React,{useEffect} from "react";
import {View,Image,TouchableOpacity as TO} from "react-native";
import css from "./PlayerControls.style";
import PlayerTimer from "./PlayerTimer/PlayerTimer";
import {useSelector,useDispatch} from "react-redux";
import {setPlaying} from "actions";
import {play1,pause0,arrow2} from "assets";


export default function PlayerControls(props){
    const dispatch=useDispatch();
    const playing=useSelector(store=>store.animation7.playing);
    const {duration}=props;
    useEffect(()=>()=>{
        dispatch(setPlaying(true));
    },[]);
    return (
        <View style={css.playercontrols}>
            <View style={css.row0}>
                <PlayerTimer duration={duration}/>
            </View>
            <View style={css.row1}>
                <TO><Image style={css.directionbtn} source={arrow2}/></TO>
                <TO style={css.playbtn} onPress={()=>{dispatch(setPlaying(!playing))}}>
                    <Image style={[css.playbtnimg,styles.playbtnimg(playing)]} source={playing?pause0:play1}/>
                </TO>
                <TO><Image style={[css.directionbtn,styles.rightarrow]} source={arrow2}/></TO>
            </View>
        </View>
    )
}

const styles={
    rightarrow:{
        transform:[{rotateZ:"180deg"}],
    },
    playbtnimg:(playing)=>({
        marginLeft:`${playing?"0":"6.5"}%`,
    }),
}