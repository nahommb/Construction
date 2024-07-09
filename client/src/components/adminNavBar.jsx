import { styled } from "styled-components";

export const AddminNavBar = ()=>{

    return <>
    <NavBar>
        <Button>Log out</Button>
    </NavBar>
    </>
}

const NavBar = styled.div`
height:70px;
background:#2D3E4E;
display: grid;
justify-items: end; 
align-items:center;
`;

const Button = styled.div`
background:blue;
color:white;
width:50px;
align-content:center;
border-radius:4px;
padding:10px;
margin-right:20px;
&:hover{
    curser:pointer;
}
`;