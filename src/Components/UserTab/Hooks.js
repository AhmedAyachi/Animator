import {useState,useEffect,useRef} from "react";
import {findNodeHandle} from "react-native";
import {rem} from "css"


export const useCollapse=(usertabRef,containerRef,scrollY)=>{
    const [_,render]=useState(null);
    const style=useRef({
        opacity:0.95,
        transform:[
            {scale:1},
            {translateX:0},
        ],
    }).current;
    useEffect(()=>{
        usertabRef.current.measureLayout(findNodeHandle(containerRef.current),(x,y,width,height)=>{
            if(height&&y){
                const {opacity,transform:[{scale},{translateX}]}=style,inputRange=[-1,y-10,y+height];
                style.opacity=scrollY.interpolate({inputRange,
                    outputRange:[opacity,opacity,0],
                });
                style.transform=[
                    {scale:scrollY.interpolate({inputRange,
                        outputRange:[scale,scale,0],
                    })},
                    {translateX:scrollY.interpolate({inputRange,
                        outputRange:[translateX,translateX,10*rem],
                    })},
                ];
                render();
            }
        });
    },[]);
    return style;
}