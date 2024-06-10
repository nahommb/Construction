import React from 'react';
import styled from 'styled-components'
import {color} from 'styled-system'

const Navbarcontainer = styled.nav `
  ${color}
  background-color:#2A243990;
  height:2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Navbarbranding = styled.div`

width:10rem;
height:50px;
${'' /* background-color:red; */}
display: flex;
align-items:center;
`;


const Navbarelements = styled.div`

width:20rem;
height:50px;
background-color:red;
display: flex;
align-items:center;
`;


const Navbar = ()=>{

return <>
 <Navbarcontainer>
    <Navbarbranding>
        <p>logo</p>
    </Navbarbranding>
    <Navbarelements></Navbarelements>
    <dev style={{width:'300px',height:'50px',backgroundColor:'red'}}>
      language
    </dev>

 </Navbarcontainer>
</>
}

export default Navbar 