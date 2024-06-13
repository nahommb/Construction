import React from 'react';
import styled from 'styled-components'
import {color} from 'styled-system'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
  width:15rem;
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

const RegisterButton = styled.button`

background-color:white;
height:40px;
width:100px;
color:white;
border: none;
border-radius:10px;


`;

const Navbar = ()=>{

return <>
 <Navbarcontainer color='white'>
    <Navbarbranding>
        <p>iConstruction</p>
    </Navbarbranding>
    <Navbarsearch>
    
    </Navbarsearch>
    <Navbarelements>
       <div>About</div>
       <div>language</div>
       <RegisterButton><Link style={{textDecoration:'none'}} to='/register'>Rigister</Link></RegisterButton>

    </Navbarelements>

 </Navbarcontainer>
</>
}

export default Navbar 