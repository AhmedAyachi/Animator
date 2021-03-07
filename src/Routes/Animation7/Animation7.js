import React,{useState} from "react";
import {View,ImageBackground} from "react-native";
import css from "./Animation7.style";
import {Player,PlayerMotion,PlayerControls,PlayListButton} from "components";
import {souhila0} from "assets";


export default function Animation7(){
    const [index,setIndex]=useState(0);
    const song=songs[index];
    return (
        <View style={css.animation7}>
            <ImageBackground style={css.background} source={song.poster} blurRadius={80}/>
            <View style={css.row0}>
                <Player poster={song.poster}/>
            </View>
            <View style={css.row1}>
                <PlayerMotion style={css.playermotion}/>
                <PlayerControls duration={song.duration}
                    onPrevious={()=>{(index&&setIndex(index-1))}}
                    onNext={()=>{(index<songs.length-1)&&setIndex(index+1)}}
                />
                <PlayListButton currentIndex={index} /*songs={songs}*/ onSelect={(index)=>{setIndex(index)}}/>
            </View>
        </View>
    )
}

const songs=[
    {
        title:"souhila",
        artist:"nassi",
        poster:souhila0,
        duration:164,
    }
];
