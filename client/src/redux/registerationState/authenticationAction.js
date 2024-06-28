import {REGISTER, LOGIN} from "../constants";

export const loginData = (data)=>{
   console.log(data)
    return {
        type:LOGIN,
        data
    }
}

export const register = (data)=>{
    
    return{
        type:REGISTER,
        data
    }
}