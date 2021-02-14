export const border=(width=2,style="solid",color="black")=>({borderWidth:width,borderStyle:style,borderColor:color});
export const rotate=(x="0deg",y="0deg",z="0deg")=>[{rotateX:x},{rotateY:y},{rotateZ:z}];
export const skew=(x="0deg",y="0deg")=>[{skewX:x},{skewY:y}];
export const padding=(input=null)=>{
    const values=input&&(typeof(input)==="string")?input.trim().split(" ").map(value=>parseInt(value)):null;
    const length=values?values.length:0;
    switch(length){
        case 0:
            return {padding:0};
        case 2:
            return {paddingVertical:values[0],paddingHorizontal:values[1]};
        case 4:
            return {paddingTop:values[0],paddingRight:values[1],paddingBottom:values[2],paddingLeft:values[3]};
        default:
            return {padding:values[0]};
    }
}
export const margin=(input=null)=>{
    const values=input&&(typeof(input)==="string")?input.trim().split(" ").map(value=>parseInt(value)):null;
    const length=values?values.length:0;
    switch(length){
        case 0:
            return {margin:0};
        case 2:
            return {marginVertical:values[0],marginHorizontal:values[1]};
        case 4:
            return {marginTop:values[0],marginRight:values[1],marginBottom:values[2],marginLeft:values[3]};
        default:
            return {margin:values[0]};
    }
}
export const useKey=(startwith="")=>`${startwith}_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;