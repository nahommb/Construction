import { useEffect,useState,} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginData } from "../redux/registerationState/authenticationAction";
import { styled } from "styled-components";
//import App from "../components/test";

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
margin:6px 0px 10px 0px;
display:block;

&:focus {
    border: none;
    font-size:20px;
    outline: none; 
    box-shadow: 0 0 0 2px orange; 
  }

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

const Button = styled.button`
background-color:green;
opacity:0.7;
height:40px;
width:120px;
border:none;
color:white;
border-radius:6px;
&:hover{
    cursor:pointer;
    opacity:1;
}
`;

const Login = ()=>{

const [isLogin,setIsLogin] = useState(true)
const [email,setEmail] = useState()
const [password,setPassword] = useState()

const navigate = useNavigate()

const dispatch = useDispatch()



 const loginHandeler = ()=>{

    // email = email.trim();
    // password = password.trim();

    if(email!== '' && password!== ''){
    dispatch(loginData({
        company_name:email,
        password:'123456',
        email:'nahomjr@gmail.com'
       }))

       navigate('/admin')
       console.log(email)
    }
    else{
      console.log('email or password not correct')
    }
  
 }

    return <>
        <Container>
          
        </Container>
        <Form >
            <center>{isLogin?<h1>Login</h1>:<h1>Forgot Password</h1>}</center>
            <FormHeader>
                <P onClick={()=>setIsLogin(true)}>Login</P>
                <P onClick={()=>setIsLogin(false)}>Forgot Password</P>         
            </FormHeader>
             
             <InputContainer>
               {isLogin?
                <LoginInputContainer>
              <label>Email</label>
                <TextField onChange={(val)=>setEmail(val.target.value)}/>
              <label>Password</label>
                <TextField/>
                <Button onClick={()=>loginHandeler()}>Submit</Button>
             </LoginInputContainer>:
             <LoginInputContainer>
              <label>Email</label>
                <TextField/>
                <p>Reset password will be sent to enterd email address</p>
             </LoginInputContainer>
             }
             </InputContainer>
        </Form>
        
    </>
}

export default Login;