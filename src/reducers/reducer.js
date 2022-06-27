const intialState = 0;
export const changeNumber =(state = intialState,action)=>{
    switch (action.type){

        case "INCREAMENT" :
        return state+1;
        
        case "DECREAMENT" :
        return state-1
        
        default : 
        return state
    }

}
export default changeNumber;