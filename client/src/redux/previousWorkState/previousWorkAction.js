import { ADDPREVIOUSWORK, GETPREVIOUSWORK } from "../constants";

export const addPreviousWorkAction = (data)=>{
    console.log(data)
    return {
        type:ADDPREVIOUSWORK,
        data:data
    }
} 
export const getPreviousWorkAction = (data)=>{
    console.log(data)
    return {
        type:GETPREVIOUSWORK,
        data:data
    }
} 