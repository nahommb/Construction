import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/registerationAction";
import { styled } from "styled-components";

const Container = styled.div`
height:400px;
width:400px;
${'' /* background-color:red; */}
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
            
        <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>

        </Container>
    </>
}

export default Register;