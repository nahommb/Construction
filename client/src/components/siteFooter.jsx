import styled  from "styled-components";

const Footer = styled.div`
height:300px;
background-color:#2D3E4E;
display:flex;
justify-content:space-between;
padding:10px 0px 0px 80px;
align-items:center;
margin-bottom:20px;
`;

const FooterBox = styled.div`
height:200px;
${'' /* background-color:orange; */}
width:400px;
align-items:center;
color:white;
`;

const P = styled.p`
margin-top:20px;
`;

const SiteFooter = ()=>{
    return <>
        <Footer>
            <FooterBox>
            <h2>Company Name</h2>
              
            </FooterBox>
            <FooterBox>
            <h2>Quick Links</h2>
            <P>Facebook</P>
              <P>Instagram</P>
              <P>Tewter</P>
            </FooterBox>
            <FooterBox>
            <h2>Contact Us</h2>
              <P>Address</P>
              <P>Phone : 099876543</P>
              <P>Email:abebe@gmail.com</P>
            </FooterBox>
            
        </Footer>
        <p style={{margin:'10px'}}>  &copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </>
}

export default SiteFooter;