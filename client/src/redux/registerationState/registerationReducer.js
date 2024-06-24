import REGISTER from "../constants";

const initialState = {
    items: [],
    total: 0,
  };

export const registerData = (state = initialState,action)=>{
    switch(action.type){ 
        case REGISTER:
            console.log('test working')
            console.log(action)
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        default :
         return state;
    }
} 