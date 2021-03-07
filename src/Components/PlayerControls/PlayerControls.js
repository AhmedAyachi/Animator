import React,{useEffect} from "react";
import {View,Image,TouchableOpacity as TO} from "react-native";
import css from "./PlayerControls.style";
import {Entypo} from "@expo/vector-icons"; 
import PlayerTimer from "./PlayerTimer/PlayerTimer";
import {useSelector,useDispatch} from "react-redux";
import {setPlaying} from "actions";


export default function PlayerControls(props){
    const dispatch=useDispatch();
    const playing=useSelector(store=>store.animation7.playing);
    const {duration,onNext,onPrevious}=props;
    useEffect(()=>()=>{
        dispatch(setPlaying(true));
    },[]);
    return (
        <View style={css.playercontrols}>
            <View style={css.row1}>
                <TO onPress={onPrevious}><Entypo {...css.directionbtn} style={[css.directionbtn.style,styles.leftarrow]}/></TO>
                <TO style={css.playbtn} onPress={()=>{dispatch(setPlaying(!playing))}}>
                    <Entypo 
                        {...css.playbtnicon}
                        name={playing?"controller-paus":"controller-play"}
                        style={[css.playbtn.style,styles.playbtnimg(playing)]}
                    />
                </TO>
                <TO onPress={onNext}><Entypo {...css.directionbtn}/></TO>
            </View>
            <View style={css.row0}>
                <PlayerTimer duration={duration}/>
            </View>
        </View>
    )
}

const styles={
    leftarrow:{
        transform:[{rotateZ:"180deg"}],
    },
    playbtnimg:(playing)=>({
        marginLeft:`${playing?"0":"6.5"}%`,
    }),
}