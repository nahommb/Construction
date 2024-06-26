import { useEffect,} from "react";
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

const InputContainer = styled(FormHeader)`
 display:block;
`;
// const [isLogin,setIsLogin] = useState(true)


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
                <P onClick={()=>console.log('clicked')}>Login</P>
                <P>Forgot Password</P>         
            </FormHeader>
             <InputContainer>
              <label>Email</label>
                <TextField/>
              <label>Password</label>
                <TextField/>
             </InputContainer>
            
        </Form>
        
    </>
}

export default Register;