import { styled } from "styled-components"
import { useEffect,useState} from "react";
import { deletePreviousWork, getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { useSelector,useDispatch } from "react-redux"

export const DeletePereviousWork = ()=>{

const dispatch = useDispatch();

const deleteResponse = useSelector((state)=>state.previousWorkData.delete_response,)
   console.log(deleteResponse)

    const [showWarning, setShowWarning] = useState(false);
    const [id , setId] = useState()

    const confirmDelete = (id)=>{
      dispatch(deletePreviousWork(id))
    }
    const handleClick = (id) => { 
       
       // dispatch(deletePreviousWork(id))
        setId(id);
        setShowWarning(true);
      // Automatically hide the warning after 60 seconds
      setTimeout(() => setShowWarning(false), 60000);
      
    }
  

    useEffect(()=>{
     dispatch(getPreviousWorkAction())
    },[])

if(deleteResponse==='Deleted successfully')
  {
     window.location.reload();
  }

    const getData = useSelector((state)=>state.previousWorkData.previousWorkData)
    // console.log(getData)
    return <Container>
       {getData[0]?(getData[0].map((data,index)=>{
          console.log(data._id)
          return <ContentContainer key={index}>
          <Image src={`http://localhost:3001/${data.image_url}`} alt='image'/>
          <p style={{margin:'8px 5px'}}>{data.building_name}</p> 
          <TextContainer>
            <p>{data.description}</p>
            <p>{data.location}</p>
          </TextContainer>
         
          <Button  onClick={()=>handleClick(data._id)}>Delete</Button>
          {showWarning && data._id === id &&<Warning>Warning: Are you Sure want to delete !
          <ConfirmButton>No</ConfirmButton> <ConfirmButton onClick={()=>confirmDelete(data._id)}>Yes</ConfirmButton></Warning>}
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
const TextContainer = styled.div`
 padding-left:15px;
 color:orange;
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
  border: 1px solid red;
  border-radius: 5px;
`;

const ConfirmButton = styled.button`
    $bg;
    height:30px;
    width:80px;
    border:none;
    border-radius:8px;
    margin-left:8px;
    margin-top:5px;
    &:hover{
        cursor:pointer;
    }
    &:active{
        background:gray;
    }
`;