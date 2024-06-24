import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/registerationAction";
import { styled } from "styled-components";

const Container = styled.div`
height:400px;
width:400px;
background-color:red;
margin:auto;
margin-top:20%
`;

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
        <Container>
            <lebel>Company Name</lebel>
        </Container>
    </>
}

export default Register;