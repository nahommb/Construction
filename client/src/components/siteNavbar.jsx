import styled from "styled-components";

const SiteNavbar = (props)=>{

const Navbar = styled.div`
   display:flex;
   justify-content:space-around;
   height:70px;
   color:white;
   background-color:#2D3E4E;
   padding-left:150px;
   padding-top:20px;
   @media screen and (max-width:600px){
      padding:0px;
      height:60px;
      

   }

`;

const InformationBox = styled.div `
    height:40px;
    ${'' /* background-color:green; */}
    ${'' /* width:150px; */}
    margin-left:30px;
    color:silver;
    display:flex;
    align-items:center;
    
`;

const Circle = styled.div`
   background-color:silver;
   height:30px;
   width:30px;
   border-radius:50%;
   margin-right:10px;
   @media screen and (max-width:600px){
      height:15px;
      width:15px;
   }
`;

const CompanyNav = styled.div`
  height:60px;
  background-color:#FF7B00;
  width:80%;
  margin:auto;
  position:relative;
  top:-20px;
  border-radius:0px 0px 10px 10px;
  display:flex;
  padding-left:20px;
  align-items:center;
  color:white;
  @media screen and (max-width:600px){
      height:40px;
   }
`;

return <>
     <Navbar>
        <InformationBox>
           <Circle></Circle>
            <div>
            <p>Email</p>
            <p>company@gmail.com</p>
            </div>
        </InformationBox>
        <InformationBox>
           <Circle></Circle>
            <div>
            <p>Phone number</p>
            <p>09876543</p>
            </div>
        </InformationBox>
        <InformationBox>
           <Circle></Circle>
            <div>
            <p>Openinng time</p>
            <p>2:30</p>
            </div>
        </InformationBox>

     </Navbar>
     <CompanyNav>Name</CompanyNav>
</>
}

export default SiteNavbar;