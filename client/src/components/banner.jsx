import bannerImage from '../assets/bannerImage1.jpg'
import  styled from 'styled-components';

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
height:300px;
background-color:white;
border-radius:30px;
margin-left:30%;
position:relative;
top:200px;
${'' /* margin-bottom:300px; */}
margin-right:30px;
display:flex;
justify-content:space-between;
padding:20px;
`;

const Box = styled.div`
background-color:black;
height:400px;
width:300px;
border-radius:20px;
margin:20px;

`;

const Banner = ()=>{


return <>
   <BannerImageContainer>
     <p style={{color:'silver',position:'relative',top:'680px'}}>We Build Your <br/><p style={{color:'red',marginLeft:'30%'}}>Life</p></p>
   </BannerImageContainer>
   <BannerElement>
       <Box>
        <div style={{height:'200px',backgroundColor:'red'}}>

        </div>
       </Box>
       <Box></Box>
       <Box></Box>

   </BannerElement>
    <div style={{height:'500px',backgroundColor:'black',position:'relative',top:'500px'}}>

</div>
</>
}

export default Banner;