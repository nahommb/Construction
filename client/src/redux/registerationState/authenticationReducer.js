import {LOGIN, REGISTER} from "../constants";

const initialState = {
    items: [],
    total: 0,

  };

export const authenticationData = (state = initialState,action)=>{
    switch(action.type){ 
        case REGISTER:
            console.log('test working')
            console.log(action)
            return {
                // ...state,
                // items: [...state.items, action.payload],
            }
        case LOGIN:
            console.log(action.data)
            return {
                ...state,
                items:[action.data]
            }
        default :
         return state;
    }
} 