import React from 'react';
import styled from 'styled-components'
import {color} from 'styled-system'


const Navbarcontainer = styled.nav `
  ${color}
  background-color:orange;
  border-bottom-left-radius:25px;
  height:2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position:fixed;
  width:100%;
  z-index:10;
`;

const Navbarbranding = styled.div`
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
  /* background-color: red; */
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 15rem;
    ${'' /* background-color: blue; */}
  }
`;


const Navbarelements = styled.div`
  height:2rem;
  width:10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* background-color:red; */}
  padding: 1rem;
  @media screen and (max-width: 768px){
    width:5rem;
    },
`; 

const Navbar = ()=>{

return <>
 <Navbarcontainer>
    <Navbarbranding>
        <p>iConstruction</p>
    </Navbarbranding>
    <Navbarsearch>
    
    </Navbarsearch>
    <Navbarelements>
       <div>language</div>
       <div>About</div>
       <div>contact</div>

    </Navbarelements>

 </Navbarcontainer>
</>
}

export default Navbar 