import {LOGIN, REGISTER, SESSION} from "../constants";

const initialState = {
    items: [],
    total: 0,
    session:false
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
                items:[action.data],
                // session:true
            }
        case SESSION:
             return {
                ...state,
                session:action.data.exists
             }
        default :
         return state;
    }
} 