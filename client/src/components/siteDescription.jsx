import  styled  from "styled-components";
import bannerImage from '../assets/constructionTools.jpg'


const DiscriptionBox = styled.div`
height:600px;
background-color:white;
position:relative;
top:-60px;
z-index:-1;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Content = styled.div`
height:700px;
width:40%;
${'' /* background-color:yellow; */}
background-image:url();
margin:auto;
padding-top:60px;
`;
const ImageContent = styled.div`
height:500px;
width:50%;
border-radius:10px;
margin-right:10px;
background-image:url(${bannerImage});
${'' /* background-color:red; */}
background-position:center;
background-size:cover;
`;

const P = styled.p`
color:orange;
margin-top:8px;
`;

const Button = styled.button`
 margin:30px;
 background-color:transparent;
 padding:0px;
 height:50px;
 width:200px;
 border-radius:8px;
 border:2px solid orange;
 color:orange;
 font-weight:bolder;
 font-size:18px;
`;

const SiteDescription = ()=>{



    return <>
        <DiscriptionBox>
            <Content>
                <h3>We can we help </h3>
                <br></br>
                <h1>Welcome To Construction Real Solutions</h1>
                <br></br>
                <p>Our team of experts specializes in designing and construction</p>
                <P>pecializes in designing and constructing</P>
                <P>Strong understanding of our clients' needs and goals</P>
                <P>Architectural design, engineering, and construction management</P>
                <P>Environmental impact of our projects</P>
                <P>Sustainable engineering solutions</P>
                <Button>Read More...</Button>

            </Content>
            <ImageContent></ImageContent>

        </DiscriptionBox>
    </>
}

export default SiteDescription;