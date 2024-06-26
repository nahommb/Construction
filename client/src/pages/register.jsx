import { useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/registerationAction";
import { styled } from "styled-components";

const Container = styled.div`
height:400px;

background-color:blue;
opacity:0.5;
z-index:1;

`;

const Form = styled.form`
height:500px;
background-color:white;
position:relative;
padding-top:50px;
top:-100px;
z-index:0;
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
  &:hover{
    font-size: 20px;  // Adjusted to a more reasonable size
    cursor: pointer;
  }
`;
const TextField = styled.input`
height:40px;
width:300px;
${'' /* background-color:red; */}
border:1px solid blue;
border-radius:8px;
padding-left:10px;
margin-bottom:10px;
display:block;
`;

const LoginInputContainer = styled(FormHeader)`
 display:block;
 height:150px;
 ${'' /* background-color:red; */}
 width:350px;
 
`;
const InputContainer = styled.div`
width:700px;
margin:auto;
display:flex;
${'' /* background-color:blue; */}
justify-content:space-around;
`;


const Register = ()=>{

const [isLogin,setIsLogin] = useState(true)

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
            <center>{isLogin?<h1>Login</h1>:<h1>Forgot Password</h1>}</center>
            <FormHeader>
                <P onClick={()=>setIsLogin(true)}>Login</P>
                <P onClick={()=>setIsLogin(false)}>Forgot Password</P>         
            </FormHeader>
             
             <InputContainer>
               {isLogin?
                <LoginInputContainer>
              <label>Email</label>
                <TextField/>
              <label>Password</label>
                <TextField/>
             </LoginInputContainer>:
             <LoginInputContainer>
              <label>Email</label>
                <TextField/>
             </LoginInputContainer>
             }
             </InputContainer>
        </Form>
        
    </>
}

export default Register;