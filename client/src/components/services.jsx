import  styled  from "styled-components";

const ServiceContainer = styled.div`
background-color:#E9F6FF;
height:300px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 70px 0px 70px;

`;
const ServiceBox = styled.div`
height:180px;
width:25em;
background-color:orange;
border-radius:10px;
`;

const Services = ()=>{
  
    

    return <>
      <ServiceContainer>
        <ServiceBox></ServiceBox>
        <ServiceBox></ServiceBox>
        <ServiceBox></ServiceBox>

      </ServiceContainer>
    </>
}
export default Services;