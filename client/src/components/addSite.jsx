import {styled } from "styled-components"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { previousWorkData } from "../redux/previousWorkState/previousWorkReducer"; 
import { addPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";

export const AddSite = ()=>{
 
    const dispatch = useDispatch();
    
    const uploadResponse = useSelector((state)=>state.previousWorkData,)
     console.log(uploadResponse.response)

    const [selectedImage,setSelectedImage] = useState();
    const [previewImage, setPreviewImage] = useState();
    const [description,setDescription] = useState();
    const [location , setLocation] = useState();
    const [name , setName] = useState();

 
    // if(uploadResponse.response === 'Successfully uploaded'){
   
    //   }
  
 
 //uploadResponse.response === 'Successfully uploaded'?alert('hello'):null;

    const uploadeImage = (e)=>{

        e.preventDefault();
       const formData = new FormData()
        formData.append('image',selectedImage)
        formData.append('description',description)
        formData.append('location',location)
        formData.append('building_name',name)
       dispatch(addPreviousWorkAction(formData))
       
       setTimeout(() =>  window.location.reload(), 3000);

      
    }

    return <>
     <SiteContainer>
     <P>Add Previous work</P>
     <form onSubmit={uploadeImage}>
     <UploadContainer>
        <ImageUpload>
        <img src={previewImage} width={'180px'} height={'200px'}></img>
        
        <Label for='image_input'> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
        <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
        </svg>
        Upload Image
        </Label> 
        
        <Input id="image_input" type="file" onChange={(event)=>{
          const file = event.target.files[0];
         setSelectedImage(event.target.files[0])
         if(file){
          setPreviewImage(URL.createObjectURL(file));
         }
         
         }}></Input> <br/>
      
        </ImageUpload>
        <div>

     <Description>
        <TextArea onChange={(event)=>setDescription(event.target.value)}></TextArea> 
        <label>Description About Site</label>
     </Description>
        </div>

     <div>

     <SiteLocation>
    <label>Site Location</label> 
     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
    <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
    </svg> */}
     <LoctaionInput onChange={(event)=>setLocation(event.target.value)}></LoctaionInput>
    
     </SiteLocation> 


     </div>
     <SiteNameContainer>
    <label>Site Name</label>
     <NameInput onChange={(event)=>setName(event.target.value)}></NameInput>
     </SiteNameContainer>
     </UploadContainer> 
     
     <Button type="submit">submit</Button>  
     <p style={{color:'white',marginLeft:'20px'}}>{uploadResponse.response}</p>
   </form>
      
     </SiteContainer>
    </>
}
const P = styled.h1`
padding-left:40px;
color:white;
`;
const SiteContainer = styled.div`
 
 margin-top:10px;
 padding-top:20px;
 background:orange;
 padding-bottom:15px;
 margin:0.5%;
 ${'' /* border-radius:30px; */}
`;
const Label = styled.label`
${'' /* border:2px solid red; */}
background:orange;
border-radius:4px;
padding:12px;
color:white;
margin:20px;
${'' /* width:150px;
height:20px;
display:flex; */}

&:hover{
  cursor:pointer;
}
`;
const Input = styled.input`
display:none;
`;

const UploadContainer = styled.div`
${'' /* height:200px; */}

justify-content:space-between;
align-items:center;

padding:20px;
${'' /* background:red; */}
display:grid;
grid-template-columns: repeat(auto-fill, minmax(100px,300px));
grid-gap:5px;
`;

const ImageUpload = styled.div`
 width:300px;
 display:flex;
 background:white;
 border-radius:8px;
`;
const SiteNameContainer = styled.div`
color:white;
`;
const Description = styled.div`
 height:100px;
 width:300px;
 ${'' /* background:blue; */}
 border:none;
 color:white;
 border-radius:4px;
 padding:10px;
 display:flex;
 justify-content:space-between;
`;
const TextArea = styled.textarea`
width:300px;
padding:15px;
border-radius:10px;
&:focus{
outline:none;
border:2px solid orange;


}
`;
const LoctaionInput = styled.input`
height:30px;
border:none;
border-radius:4px;  
padding-left:10px;
margin-left:3px;
&:focus{
    outline:none;
    border:2px solid green;
  }
`;
const NameInput = styled(LoctaionInput)`

`;

const SiteLocation = styled.div`
  height:40px;
  margin-left:10px;
  width:300px;
  display:flex;
  align-items:center;
  color:white;
  ${'' /* background:green; */}
`;
const Button = styled.button`
 height:50px;
 width:150px;
 margin:auto;
 border-radius:7px;
 border:none;
 margin-left:50%;
 background:#06D001;
 font-size:18px;
 color:white;
 &:hover{
    cursor:pointer;
   
 }
`;