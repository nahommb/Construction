import  styled  from "styled-components";

const ServiceContainer = styled.div`
${'' /* background-color:#D9D9D9; */}
height:300px;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 70px 10px 70px;

`;
const ServiceBox = styled.div`
height:150px;
width:22em;
background-color:#FF7B00;
border-radius:10px;
padding:30px;
display:flex;
margin-right:20px;
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}
color:white;
`;

const SiteIcon = styled.div`
height:150px;
width:150px;
background-color:#D9D9D9;
margin-right:30px;
`;
const Services = ()=>{
  
    

    return <>
      <ServiceContainer>
        <ServiceBox>
           <SiteIcon></SiteIcon>
             Construction
        </ServiceBox>
        <ServiceBox>
           <SiteIcon></SiteIcon>
            Architecture
        </ServiceBox>
        <ServiceBox>
           <SiteIcon></SiteIcon>
            Consulating
        </ServiceBox>

      </ServiceContainer>
    </>
}
export default Services;