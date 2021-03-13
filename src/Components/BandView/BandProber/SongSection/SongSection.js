import React from "react";
import {View,Text,FlatList} from "react-native";
import css from "./SongSection.style";
import SongView from "./SongView/SongView";
import {useKey} from "afile";


export default function SongSection(props){
    const {songs}=props;
    return (
        <View style={css.songsection}>
            <Text style={css.title}>Popular</Text>
            <FlatList
                style={css.songslist}
                showsVerticalScrollIndicator={false}
                keyExtractor={()=>useKey("songview")}
                data={songs}
                renderItem={({item})=>
                    <SongView key={useKey("songview")} song={item}/> 
                }
            />
        </View>
    )
}

SongSection.defaultProps={
    songs:[],
}