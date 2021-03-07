import {useState,useEffect} from "react";
import {useSelector} from "react-redux";


export const usePlayTime=(duration,barwidth,timebarwidth)=>{
    const [playtime,setPlayTime]=useState(0);
    const playing=useSelector(store=>store.animation7.playing);
    let timeout=null;
    if(playing&&playtime<duration){
        !function setPlayTimeOut(){
            timeout=setTimeout(()=>{
                const value=Math.round((barwidth._value/timebarwidth)*duration);
                if(playtime===value){
                    clearTimeout(timeout);
                    setPlayTimeOut();
                }
                else{
                    setPlayTime(value);
                }
            },1000);
        }();
    }
    else if(playtime>=duration){
        setPlayTime(0);
    }
    return playtime;
}
