import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/registerationAction";
import { styled } from "styled-components";

const Container = styled.div`
height:400px;

background-color:blue;
opacity:0.3;
z-index:1;

`;

const Form = styled.form`
height:500px;
background-color:white;
position:relative;
padding-top:50px;
top:-130px;
z-index:-1;
margin:20px;
border-radius:20px;
box-shadow:2px 2px 20px black;

`;

const FormHeader = styled.div`
display:flex;
height:80px;
width:500px;
align-items:center;
margin:auto;
justify-content:space-between;
`;

const P = styled.p`
  font-weight: bold;
  &:hover {
    font-size: 40px;  // Adjusted to a more reasonable size
    cursor: pointer;
    color: red;
  }
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
        <Container></Container>
        <Form>
            <center><h1>Login Page</h1></center>
            <FormHeader>
                <P>Login</P>
                <P>Forgot Password</P>
               
            </FormHeader>
        </Form>
        
    </>
}

export default Register;