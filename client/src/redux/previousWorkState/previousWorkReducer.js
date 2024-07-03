import { ADDPREVIOUSWORK, GETPREVIOUSWORKDATA, GETPREVIOUSWORKRESPONSE } from "../constants";

const initialState = {
    data: [],
    total: 0,
    response:'',
    previousWorkData:[]
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
        case GETPREVIOUSWORKRESPONSE:
            console.log(action.data)
            return {
                ...state,
                response:[action.data]
            }
        case GETPREVIOUSWORKDATA:
            //console.log(action.data)
            return {
                ...state,
                previousWorkData:[action.data]
            }
        default : 
         return state;
    }
} 