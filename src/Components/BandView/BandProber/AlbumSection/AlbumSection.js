import React from "react";
import {View,Text,Image,ScrollView,Animated} from "react-native";
import css from "./AlbumSection.style";
import {useKey} from "afile";


export default function AlbumSection(props){
    const {albums}=props;
    return (
        <Animated.View style={css.albumsection}>
            <Text style={css.title}>Albums</Text>
            <ScrollView horizontal
                contentContainerStyle={css.albums}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >
            {albums.map(({name,cover})=>
                <View style={css.album} key={useKey("album")}>
                    <Image style={css.albumcover} source={cover}/>
                    <Text style={css.albumname}>{name}</Text>
                </View>
            )}
            </ScrollView>
        </Animated.View>
    )
}

AlbumSection.defaultProps={
    albums:[],
}