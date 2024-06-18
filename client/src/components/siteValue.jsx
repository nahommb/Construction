import  styled  from "styled-components"; 

const Container = styled.div`
${'' /* height:300px; */}
${'' /* background-color:red; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(15rem,20rem));
grid-gap:5px;
${'' /* width:100%; */}
padding:10px 10% 10px 10%;
`;

const ServiceBox = styled.div`
height:150px;
width:15rem;
${'' /* background-color:#FF7B00; */}
border-radius:10px;
padding:30px;
display:flex;
${'' /* margin-right:20px; */}
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}
color:white;
`;

const SiteIcon = styled.div`
height:150px;
width:150px;
background-color:silver;
margin-right:30px;
`;

const SiteValue = (props)=>{

return <>
      <Container>
        <ServiceBox>
          <SiteIcon></SiteIcon>
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
        </ServiceBox>
      </Container>
    </>
}

export default SiteValue;