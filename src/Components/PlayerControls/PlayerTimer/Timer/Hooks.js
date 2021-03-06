import {useState,useEffect} from "react";


export const usePlayTime=(duration,barwidth,timebarwidth)=>{
    const [playtime,setPlayTime]=useState(0);
    useEffect(()=>{
        let timeout=null;
        if(playtime<duration){
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
            return ()=>{
                clearTimeout(timeout);
            }
        }
    },[playtime]);
    return playtime;
}
