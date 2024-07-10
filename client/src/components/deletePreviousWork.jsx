import { styled } from "styled-components"
import { useEffect } from "react";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { useSelector,useDispatch } from "react-redux"

export const DeletePereviousWork = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getPreviousWorkAction())
    },[])
    const getData = useSelector((state)=>state.previousWorkData.previousWorkData)
    // console.log(getData)
    return <Container>
       {getData[0]?(getData[0].map((data,index)=>{
          console.log(data.name)
          return <ContentContainer key={index}>
          <Image src={`http://localhost:3001/${data.name}`} alt='image'/>
          <p style={{margin:'8px 5px'}}>Name of building</p> 
          <p>Description of site or building</p>
          <p>location of building</p>
          <Button>Delete</Button>
          </ContentContainer>
        })):(<p>loading</p>)}

    </Container>
}

const Container = styled.div`

${'' /* background-color:red; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(100px,250px));
grid-gap:5px;
align-items:center;
padding:20px 0px 0px 9%;
`;

const ContentContainer = styled.div`
  height:400px;
  ${'' /* background:blue; */}
  display:block;
  align-items:center
  
`;
const Button = styled.button`
height:40px;
width:100px;
font-size:20px;
border:none;
border-radius:6px;
margin-left:30%;
margin-top:10px;
&:hover{
    cursor:pointer;
    background:red;
    color:white;
}
`;

const Image = styled.img`
height:250px;
width:250px;
border-radius:5px;

`;