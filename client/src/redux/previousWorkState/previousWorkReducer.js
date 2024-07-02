import { ADDPREVIOUSWORK, GETPREVIOUSWORK } from "../constants";

const initialState = {
    data: [],
    total: 0,
    response:''
  };

  export const previousWorkData = (state = initialState,action)=>{
    switch(action.type){ 
        case ADDPREVIOUSWORK:
            console.log('previous works add')
            console.log(action)
            return {
                 ...state,
                data: [action.data],
            }
        case GETPREVIOUSWORK:
            console.log(action.data)
            return {
                ...state,
                response:[action.data]
            }
        default :
         return state;
    }
} 