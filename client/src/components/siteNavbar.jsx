import styled from "styled-components";

const SiteNavbar = (props)=>{

const Navbar = styled.div`
   display:flex;
   ${'' /* justify-content:space-between; */}
   height:70px;
   color:white;
   background-color:black;
   padding-left:150px;
   padding-top:20px;
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
`;

const CompanyNav = styled.div`
  height:60px;
  background-color:orange;
  width:80%;
  margin:auto;
  position:relative;
  top:-20px;
  border-radius:0px 0px 10px 10px;
`;

return <>
     <Navbar>
        <InformationBox>
           <Circle></Circle>
            <div>
            <p>Email</p>
            <p>neymar@gmail.com</p>
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
     <CompanyNav></CompanyNav>
</>
}

export default SiteNavbar;