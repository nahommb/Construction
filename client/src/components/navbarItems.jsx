import { styled } from "styled-components"

export const NavbarItems = ()=>{
    return <Container>
      <Items>Home</Items>
      <Items>Detail</Items>
    </Container>
}

const Container = styled.div`
height:70px;
width:150px;
background:orange;
display:flex;
align-items:end;
border-radius:0px 0px 8px 8px;
justify-content:space-around;
margin-top:30px;
padding-bottom:10px;


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