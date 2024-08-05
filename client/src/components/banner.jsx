import bannerImage from '../assets/bannerImage1.jpg'
import  styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { register } from '../redux/registerationState/authenticationAction';
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { useSelector } from 'react-redux';



const Banner = ()=>{



  const getData = useSelector((state)=>state.previousWorkData.previousWorkData)
  console.log(getData)

const navigate = useNavigate();

const dispatch = useDispatch()

const listOfContractors = [
    1,2,3,4,5,6,7
];

const data ={
  name:'abebe',
  age:10
}



return <>
   <BannerImageContainer>
     <p style={{color:'silver',position:'relative',top:'680px'}}>We Build Your <br/><p style={{color:'red',marginLeft:'30%'}}>Life</p></p>
   </BannerImageContainer>
   <BannerElement hidescrollbar>
   
     {getData[0]?(getData[0].map((data,index)=>{
        return<Box key={index} onClick={()=>{
          console.log('clicked'); 
        // dispatch({type:'getpreviouswork'})
        navigate(`/sites/${index}`)

        }}>
          <Image src={`http://localhost:3001/${data.image_url}`}></Image>
         <InfoBox>
          <h3>{data.building_name}</h3>
          <p>2345 ⭐</p>
         </InfoBox> 
        </Box>
     })):(<p></p>)}
       {/* <Box> */}
        {/* <div style={{height:'200px',backgroundColor:'red'}}>

        </div>
       </Box>
       <Box></Box>
       <Box></Box> */}

   </BannerElement>
    <BannerBottomTextContainer>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
</BannerBottomTextContainer>
</>
}

export default Banner;

const BannerImageContainer = styled.div`
   ${'' /* background-color:red; */}
   height:40rem;
   ${'' /* width:100%; */}
   
   z-index:-1;
  
   background-image:url(${bannerImage});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   font-size:70px;
   font-family: "Rowdies", sans-serif;
   font-weight: 700px;
   color:red;
   margin-bottom:10px;
   padding:30px;
   @media screen and (max-width:600px){
    ${'' /* height:60rem; */}
   }

`;

const BannerElement = styled.div`
height:30rem;
background-color:white;
border-radius:30px;
box-shadow:2px 3px 4px orange;
margin-left:30%;
position:relative;
top:200px;
${'' /* margin-bottom:100px; */}
margin-right:30px;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(100px,300px));
grid-gap:5px;
${'' /* justify-content:space-between; */}
padding:20px;
overflow-x:auto;
overflow-y:auto;
${props => props.hidescrollbar && `
    &::-webkit-scrollbar {
      width: 0;
    }
  `}
  @media screen and (max-width:600px){
    top:50px;
    grid-template-columns: repeat(auto-fill, minmax(50px,200px));
  }
`;

const Box = styled.div`
background-color:;
height:400px;
box-shadow:1px 1px 3px 0.1px orange;
border-radius:20px;
margin:10px;
@media screen and (max-width:600px){
    height:200px;
}
&:hover{
  background-color:orange;
  ${'' /* opacity:0.3; */}
  cursor:pointer;
  color:white;
}
`;
const Image = styled.img`
width:100%;
height:80%;
`;
const InfoBox = styled.div`
 padding:5%;
`;
const BannerBottomTextContainer = styled.div`
height:400px;
background-image:;
position:static;
top:0px;
display:flex;
align-items:end;
margin-bottom:30px;
padding:0px 40px 0px 40px;

@media screen and (max-width:600px){
    height:200px;
}
`;