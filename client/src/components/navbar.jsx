import React from 'react';
import styled from 'styled-components'
import {color,space} from 'styled-system'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const Navbarcontainer = styled.nav `
  ${color}
  
  background-color:orange;
  border-bottom-left-radius:130px;
  height:4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position:fixed;
  width:100%;
  z-index:10;
  box-shadow:2px 2px 10px black;
  
`;

const Navbarbranding = styled.div`
 font-family: "Rowdies", sans-serif;
  font-weight: 700px;
  font-size:25px;
  font-style: normal;
padding-left:30px;
width:10rem;
height:50px;
${'' /* background-color:red; */}
display: flex;
align-items:center;
@media screen and (max-width: 768px){
    width:5rem;
    },
`;


const Navbarsearch = styled.input`
  width: 30rem;
  height: 40px;
  border-radius: 20px;
  border: none;
  margin-left:20px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding-left:20px;

  @media screen and (max-width: 1000px) {
    position:fixed;
    top:120px;
    left:10rem;
    width: 20rem;
    background-color: blue;
  }
  @media screen and (max-width: 500px) {
    position:fixed;
    top:100px;
    margin:auto;
    width: 20rem;
    background-color: transparent;
    border:2px solid red;
  }
`;


const Navbarelements = styled.div`
  height:2rem;
  width:10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right:10px;
  ${'' /* background-color:red; */}
  padding: 1rem;
  @media screen and (max-width: 768px){
    ${'' /* width:10rem; */}
    margin-right:40%;
    },
`; 

const Button = styled.button`
 ${color}
${space}
${'' /* background-color:red; */}
height:30px;
width:50px;
border: none;
border-radius:5px 5px 5px 0px;
marginLeft:30px;
&:hover{
  cursor:pointer;
  background-color:#BBE9FF
  
}
&:active{
  background-color:yellow;
}
`;

const Navbar = ()=>{

  const navigate = useNavigate()

  const {t} = useTranslation()
  const { i18n } = useTranslation();
  
const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

return <>
 <Navbarcontainer color='white'>
    <Navbarbranding>
        <p>iConstruction</p>
    </Navbarbranding>
    <Navbarsearch>
    
    </Navbarsearch>
    <Navbarelements>
       <div>{t('about')}</div>
       <Button color='red' onClick={()=>changeLanguage('en')}>engUSA</Button>
       <Button color='green' onClick={()=>changeLanguage('am')}>አማ</Button>

       {/* <Button bg='white' color='blue' onClick={()=>navigate('/register')}>Register</Button> */}
       {/* <Button bg='green' color='white' onClick={()=>navigate('/register')}>Login</Button> */}

    </Navbarelements>

 </Navbarcontainer>
</>
}

export default Navbar 