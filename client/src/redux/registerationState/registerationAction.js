import REGISTER from "../constants";

export const register = (data)=>{
    
    return{
        type:REGISTER,
        data
    }
}