import  styled  from "styled-components";

const Container = styled.div`
${'' /* height:400px; */}

${'' /* background-color:blue; */}
display:flex;
${'' /* grid-template-columns: repeat(auto-fill, minmax(100px,300px)); */}
${'' /* grid-gap:5px; */}
justify-content:space-between;
overflow-x:auto;
${'' /* width:800px; */}
margin:40px 10% 40px 10%;

${props => props.hidescrollbar && `
    &::-webkit-scrollbar {
      width: 0;
      
      
    }
  `}
`;
const WorkBox = styled.div`
${'' /* height:250px; */}
min-width:300px;
margin:30px;
border-radius:10px;
background-color:#E7F0DC;
display:block;
align-items:center;
color:orange;
${'' /* padding:10px; */}
`;
const H1 = styled.h1`
 margin:2rem 6rem 2rem 6rem;
 color:#FF7B00;
`;
const PreviousWork = ()=>{

    return <>
     <H1>Our Previous Works</H1>
      <Container hidescrollbar>
        <WorkBox>
        <img src='http://localhost:3001/previousworks/FB_IMG_15751795553924883.jpg' alt='not working' width={'300px'} height={'300px'} style={{borderRadius:'10px'}}/>
         Danayit
        </WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox> 
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>

      </Container>
    </>
}

export default PreviousWork;