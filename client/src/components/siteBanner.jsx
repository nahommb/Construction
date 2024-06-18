import siteBannerImage from '../assets/siteBannerImage.jpg';
import  styled  from 'styled-components';

const Banner = styled.div`
height:700px;
background-image:url(${siteBannerImage});
background-position:center;
background-size:cover;
position:relative;
opacity:0.8;
top:-60px;
z-index:-1;
`;

const SiteBanner = ()=>{

return <>
 <Banner></Banner>

</>
}

export default SiteBanner;