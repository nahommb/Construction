import { styled } from "styled-components"

export const NavbarItems = ()=>{
    return <Container>
      <Items>Home</Items>
      <Items>Detail</Items>
    </Container>
}

const Container = styled.div`
height:50px;
width:100px;
${'' /* background:red; */}
display:flex;
align-items:end;
justify-content:space-between;
margin-top:30px;
`;

const Items = styled.p`
&:hover{
  cursor:pointer;
  color:#F5F7F8
},
&:active{
    color:purple;
}
`;