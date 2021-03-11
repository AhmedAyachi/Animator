

export {default as Colors} from "./Colors";

export const getMinutes=(time)=>Math.floor(time/60);

export const getSeconds=(time)=>{
    const seconds=time%60;
    return `${seconds<10?"0":""}${seconds}`;
}