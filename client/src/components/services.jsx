import  styled  from "styled-components";
import { useTranslation } from "react-i18next";

const ServiceContainer = styled.div`
${'' /* background-color:#D9D9D9; */}
${'' /* height:300px; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(100px,300px));
grid-gap:5px;
justify-content:space-between;
align-items:center;
padding:10px 70px 10px 70px;

`;
const ServiceBox = styled.div`
height:150px;
width:20em;
background-color:#FF7B00;
border-radius:10px;
padding:30px;
display:flex;
margin-right:10px;
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}
color:white;
@media screen and (max-width:600px){
   height:80px;
   font-size:8px;
   }
`;

const SiteIcon = styled.div`
height:150px;
width:150px;
?background-color:#D9D9D9;
margin-right:30px;
`;
const Services = ()=>{
  
  const { t } = useTranslation();

    return <>
      <ServiceContainer>
        <ServiceBox>
           <SiteIcon>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
           </SiteIcon>
             <p>{t('construction')}<br/><div style={{height:'6px',backgroundColor:'white'}}></div></p>
             
        </ServiceBox>
        <ServiceBox>
           <SiteIcon>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
           </SiteIcon>
            Architecture
        </ServiceBox>
        <ServiceBox>
           <SiteIcon>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>

           </SiteIcon>
            Consulating
        </ServiceBox>

      </ServiceContainer>
    </>
}
export default Services;