import bannerImage from '../assets/bannerImage1.jpg'
import  styled from 'styled-components';
 import { useNavigate } from 'react-router-dom';

const BannerImageContainer = styled.div`
   background-color:red;
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
box-shadow:2px 3px 4px black;
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
box-shadow:2px 2px 5px 1px green;
border-radius:20px;
margin:10px;
@media screen and (max-width:600px){
    height:200px;
}
&:hover{
  background-color:red;
  opacity:0.3;
  cursor:pointer;
}
`;

const Banner = ()=>{

   const navigate = useNavigate();

const listOfContractors = [
    1,2,3,4,5,6,7
];


return <>
   <BannerImageContainer>
     <p style={{color:'silver',position:'relative',top:'680px'}}>We Build Your <br/><p style={{color:'red',marginLeft:'30%'}}>Life</p></p>
   </BannerImageContainer>
   <BannerElement hidescrollbar>
     {listOfContractors.map((list,index)=>{
        return<Box key={index} onClick={()=>{
          console.log('clicked'); 
        navigate(`/sites/${index}`)
        }}></Box>
     })}
       <Box>
        <div style={{height:'200px',backgroundColor:'red'}}>

        </div>
       </Box>
       <Box></Box>
       <Box></Box>

   </BannerElement>
    <div style={{height:'500px',backgroundColor:'black',position:'static',top:'0px'}}>

</div>
</>
}

export default Banner;