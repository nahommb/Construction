import styled  from "styled-components";

const Footer = styled.div`
height:450px;
background-color:#2D3E4E;
display:flex;
justify-content:space-between;
padding:10px 0px 0px 80px;
align-items:center;
margin-bottom:50px;
`;

const FooterBox = styled.div`
height:400px;
${'' /* background-color:orange; */}
width:400px;
align-items:center;
color:white;
`;

const SiteFooter = ()=>{
    return <>
        <Footer>
            <FooterBox><h2>Quick Links</h2>awoidj</FooterBox>
            <FooterBox><h2>Support</h2></FooterBox>
            <FooterBox><h2>Contact Us</h2></FooterBox>

        </Footer>
    </>
}

export default SiteFooter;