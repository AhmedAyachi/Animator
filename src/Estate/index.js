import {Dimensions} from "react-native";


const {height,width}=Dimensions.get("window");
export const vw=width*0.01;
export const vh=height*0.01;
export const rem=3*vw;