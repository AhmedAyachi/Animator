import React,{useRef} from "react";
import {View,Text,Image,ScrollView,Animated,ImageBackground} from "react-native";
import css from "./AlbumSection.style";
import {useKey} from "afile";


export default function AlbumSection(props){
    const {albums}=props;
    const state=useRef({
        albums:albums.length<4?albums:albums.slice(0,2),
        hiddenalbums:albums.length<4||albums.slice(2),
    }).current;
    return (
        <View style={css.albumsection}>
            <Text style={css.title}>Albums</Text>
            <ScrollView horizontal
                contentContainerStyle={css.albums}
                directionalLockEnabled={true}
                decelerationRate={1}
                snapToInterval={css.album.width}
                disableIntervalMomentum={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >
            {state.albums.map(({name,cover})=>
                <View style={css.album} key={useKey("album")}>
                    <Image style={css.albumcover} source={cover}/>
                    <Text style={css.albumname}>{name}</Text>
                </View>
            )}
            {Boolean(state.hiddenalbums.length)&&
                <View style={css.album}>
                    <ImageBackground style={css.albumcover} source={state.hiddenalbums[0].cover} blurRadius={2}>
                        <View style={css.moreview}>
                            <Text style={css.moretext}>+{state.hiddenalbums.length} More</Text>
                        </View>
                    </ImageBackground>
                </View>
            }
            </ScrollView>
        </View>
    )
}

AlbumSection.defaultProps={
    albums:[],
}