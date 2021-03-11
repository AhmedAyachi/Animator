import {Animated} from "react-native";
import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import {princesssofia,anton,cabin,squadaone} from "assets";


export const useCustomFonts=()=>{
    const [loaded]=useFonts({
        princesssofia,anton,cabin,squadaone,
    });
    return loaded;
}

export const {height,width}=Dimensions.get("screen");
export const vw=width*0.01;
export const vh=height*0.01;
export const rem=3*vw;

export const border=(width=2,style="solid",color="black")=>({borderWidth:width,borderStyle:style,borderColor:color});
export const rotate=(x="0deg",y="0deg",z="0deg")=>[{rotateX:x},{rotateY:y},{rotateZ:z}];
export const skew=(x="0deg",y="0deg")=>[{skewX:x},{skewY:y}];
export const inset=(value=0)=>({top:value,right:value,bottom:value,left:value});
