import React,{useState} from "react";
import {View,Image,Modal,FlatList,TouchableOpacity as TO} from "react-native";
import css from "./PlayListButton.style";
import {MaterialCommunityIcons as MCI} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {useKey} from "afile";
import SongRow from "./SongRow/SongRow";
import {Colors} from "estate";


export default function PlayListButton(props){
    const {songs,currentIndex,onSelect}=props;
    const [isVisible,setIsVisible]=useState(false);
    return (
        <View style={css.playlistbutton}>
            <TO onPress={()=>{setIsVisible(true)}}>
                <MCI {...css.listbtn}/>
            </TO>
            <Modal
                visible={isVisible} 
                transparent={true}
                animationType="fade" 
                statusBarTranslucent={true}
                onRequestClose={()=>{setIsVisible(false)}}
            >
                <View style={css.modalview}>
                    
                    <LinearGradient 
                        style={css.listbackground} 
                        colors={[colors.secondary,"transparent"]}
                        locations={[0.01,1]}
                        start={[0.5,0]} end={[0.5,1]}
                    />
                    <View style={css.songslist}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={()=><View style={css.separator}/>}
                            data={songs}
                            keyExtractor={()=>useKey("songrow")}
                            renderItem={({item,index})=>
                                <SongRow 
                                    song={item}
                                    isCurrent={currentIndex===index}
                                    onPress={()=>{
                                        onSelect(index);
                                        setIsVisible(false);
                                    }}
                                />
                            }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

PlayListButton.defaultProps={
    songs:new Array(20).fill({title:"Song title",artist:"Song artist"}),
}

const colors=Colors.animation7;