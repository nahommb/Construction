import bannerImage from '../assets/bannerImage.jpg'
import  styled from 'styled-components';

const BannerImageContainer = styled.div`
   background-color:red;
   height:700px;
   width:100%;
   position:fixed; 
   top:-20px;
   z-index:-1;
   padding:100px;
   padding-top:300px;
   background-image:url(${bannerImage});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

`;

const Banner = ()=>{


return <>
   <BannerImageContainer></BannerImageContainer>
    <div style={{height:'200px',backgroundColor:'orange',position:'relative',top:'500px',marginBottom:'300px'}}>

    </div>
    <div style={{height:'500px',backgroundColor:'blue',position:'relative',top:'500px'}}>

</div>
</>
}

export default Banner;