import { styled } from "styled-components"

export const Location = ()=>{
    return <div style={{background:'#2D3E4E'}}>
       <h2 style={{color:'white', padding:'20px'}}>Our Head Office</h2>
       <LocationBox>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31524.691495553772!2d38.74391662374349!3d9.010147197822901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b915db8c8b%3A0xd8577380eddaf012!2sMeskel%20Square!5e0!3m2!1sen!2set!4v1720475034104!5m2!1sen!2set" width={"99.7%"} height={"100%"}></iframe>
       </LocationBox>
       <Footer></Footer>
    </div>
}

const LocationBox = styled.div`
 height:500px;
 width:100%;
`;

const Footer = styled.div`
 height:500px;
 width:98.0%;
 border:4px solid orange;
 border-radius:50px 0px 50px 0px;
 border-bottom:none;
 border-top:none;
 margin-bottom:30px;
 background:#2D3E4E;
`;