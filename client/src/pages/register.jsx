import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/registerationAction";

const Register = ()=>{

const dispatch = useDispatch()
 useEffect(()=>{
   dispatch(register({
    company_name:'nahom',
    password:'123456',
    emial:'hiopokopo'
   }))
 })
    return <>
        hello
    </>
}

export default Register;