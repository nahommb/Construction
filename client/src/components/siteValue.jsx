import  styled  from "styled-components"; 

const Container = styled.div`
${'' /* height:300px; */}
${'' /* background-color:red; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(12rem,20rem));
grid-gap:35px;
${'' /* width:100%; */}
padding:10px 2% 10px 2%;
`;

const ServiceBox = styled.div`
height:150px;
width:17rem;
${'' /* background-color:#FF7B00; */}
border-radius:10px;
padding:20px;
display:flex;
${'' /* margin-right:20px; */}
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}

`;

const SiteIcon = styled.div`
height:150px;
width:150px;
${'' /* background-color:silver; */}
margin-right:30px;
`;

const SiteValue = (props)=>{

return <>
      <Container>
        <ServiceBox>
          <SiteIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="#FF7B00" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>

          </SiteIcon>
          Work Strategy
          awjdawjdoawdjiowjdjawodjaowdj
        </ServiceBox>
        <ServiceBox>
          <SiteIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="#FF7B00" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>

          </SiteIcon>
          Best Quality <br></br>
          wdawdawdadawdwadawdawd
        </ServiceBox>
        <ServiceBox>
          <SiteIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="#FF7B00" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>

          </SiteIcon>
          Specialist Engineers
          dajwdjawdpokwadokapwdkgjhhu
        </ServiceBox>
        <ServiceBox>
          <SiteIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="#FF7B00" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>

          </SiteIcon>
          Skilled Workers
          awdjawjdawjdoiawpodkpawkd
        </ServiceBox>
      </Container>
    </>
}

export default SiteValue;