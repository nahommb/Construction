import { ADDPREVIOUSWORK, GETPREVIOUSWORK, GETPREVIOUSWORKRESPONSE } from "../constants";

export const addPreviousWorkAction = (data)=>{
    console.log(data)
    return {
        type:ADDPREVIOUSWORK,
        data:data
    }
} 
export const getPreviousWorkResponseAction = (data)=>{
    console.log(data)
    return {
        type:GETPREVIOUSWORKRESPONSE,
        data:data
    }
} 

export const getPreviousWorkAction = ()=>{
   // console.log(data)
    return {
        type:GETPREVIOUSWORK,
        
    }
} 