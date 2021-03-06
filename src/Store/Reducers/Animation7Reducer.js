
const initState={
    playing:true,
}

export default function Animation7Reducer(state=initState,action){
    switch(action.type){
        case "playing":
            return {...state,playing:action.value};
        default:
            return {...state};
    }
}