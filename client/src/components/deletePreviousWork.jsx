import { styled } from "styled-components"
import { useEffect,useState} from "react";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { useSelector,useDispatch } from "react-redux"

export const DeletePereviousWork = ()=>{


    const [showWarning, setShowWarning] = useState(false);
    const [id , setId] = useState()

    const handleClick = (id) => {
        
        setId(id);
        setShowWarning(true);
      // Automatically hide the warning after 60 seconds
      setTimeout(() => setShowWarning(false), 60000);
        
  
    }

    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getPreviousWorkAction())
    },[])
    const getData = useSelector((state)=>state.previousWorkData.previousWorkData)
    // console.log(getData)
    return <Container>
       {getData[0]?(getData[0].map((data,index)=>{
          {/* console.log(data.name) */}
          return <ContentContainer key={index}>
          <Image src={`http://localhost:3001/${data.image_url}`} alt='image'/>
          <p style={{margin:'8px 5px'}}>{data.building_name}</p> 
          <p>{data.description}</p>
          <p>{data.location}</p>
          <Button  onClick={()=>handleClick(index)}>Delete</Button>
          {showWarning && index === id &&<Warning>Warning: Are you Sure want to delete !</Warning>}
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
margin-bottom:50px;
`;

const ContentContainer = styled.div`
  ${'' /* height:400px; */}
  ${'' /* background:blue; */}
  display:block;
  align-items:center;
  margin-bottom:5px;
  
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
const Warning = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #ffcc00;
  color: #663300;
  border: 1px solid #663300;
  border-radius: 5px;
`;