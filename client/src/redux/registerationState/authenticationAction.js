import {REGISTER, LOGIN,SESSION, SESSIONREQUEST} from "../constants";

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

export const sessionAction= (data)=>{
    
    return{
        type:SESSION,
        data
    }
}

export const sessionActionRequest= ()=>{
    
    return{
        type:SESSIONREQUEST,
       
    }
}