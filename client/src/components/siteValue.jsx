import  styled  from "styled-components"; 

const Container = styled.div`
${'' /* height:300px; */}
${'' /* background-color:red; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(12rem,20rem));
grid-gap:35px;
${'' /* width:100%; */}
padding:10px 2% 10px 2%;
`;

const ServiceBox = styled.div`
height:150px;
width:17rem;
${'' /* background-color:#FF7B00; */}
border-radius:10px;
padding:20px;
display:flex;
${'' /* margin-right:20px; */}
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}
color:;
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
          Work Strategy
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
          Best Quality
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
          Specialist Engineers
        </ServiceBox>
        <ServiceBox>
          <SiteIcon></SiteIcon>
          Skilled Workers
        </ServiceBox>
      </Container>
    </>
}

export default SiteValue;