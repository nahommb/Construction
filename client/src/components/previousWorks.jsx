import  styled  from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";

 

const PreviousWork = ()=>{



  const getData = useSelector((state)=>state.previousWorkData.previousWorkData)
  if(getData[0]){
    // console.log(getData[0][0].name)
  }
  else{
    console.log('state loading')
  }
  

    return <> 
     <H1>Our Previous Works</H1>
      <Container hidescrollbar>
      {getData[0]?(getData[0].map((data,index)=>{
          console.log(data.name)
          return <WorkBox key={index}>
          <Image src={`http://localhost:3001/${data.image_url}`} alt='image'/>
          <p style={{margin:'8px 5px'}}>{data.building_name}</p> 
          <p>{data.description}</p>
          <p>{data.location}</p>
          </WorkBox>
        })):(<p>loading</p>)}
       
      </Container>
    </>
}

export default PreviousWork;



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
${'' /* background-color:#E7F0DC; */}
${'' /* display:block; */}
align-items:center;
color:orange;

`;
const H1 = styled.h1`
 margin:2rem 6rem 2rem 6rem;
 color:#FF7B00;
`;

const Image = styled.img`
height:300px;
width:250px;
border-radius:10px;
`;