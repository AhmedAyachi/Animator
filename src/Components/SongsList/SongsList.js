import React,{useState} from "react";
import {View,Image,Modal,FlatList,TouchableOpacity as TO} from "react-native";
import css from "./SongsList.style";
import {MaterialCommunityIcons as MCI} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {useKey} from "afile";
import SongRow from "./SongRow/SongRow";
import {Colors} from "estate";


export default function SongsList(props){
    const {songs}=props;
    const [isVisible,setIsVisible]=useState(false);
    return (
        <View style={css.songslist}>
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
                        colors={[colors.primary,"transparent"]}
                        locations={[0.01,1]}
                        start={[0.5,0]} end={[0.5,1]}
                    />
                    <View style={css.list}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={songs}
                            keyExtractor={()=>useKey("songrow")}
                            renderItem={({item})=>
                                <SongRow song={item}/>
                            }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

SongsList.defaultProps={
    songs:new Array(20).fill({title:"Song title",artist:"Song artist"}),
}

const colors=Colors.animation7;