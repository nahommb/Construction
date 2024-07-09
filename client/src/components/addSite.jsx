import {styled } from "styled-components"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { previousWorkData } from "../redux/previousWorkState/previousWorkReducer"; 
import { addPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";

export const AddSite = ()=>{
 
    const dispatch = useDispatch();

    const uploadResponse = useSelector((state)=>state.previousWorkData,)
    console.log(uploadResponse)
    const [selectedImage,setSelectedImage] = useState();
    const [previewImage, setPreviewImage] = useState();

    const uploadeImage = (e)=>{

        e.preventDefault();
       const formData = new FormData()
        formData.append('image',selectedImage)
       console.log(selectedImage)
       console.log(formData)
    
       dispatch(addPreviousWorkAction(formData))
      
    
    }
    return <>
     <SiteContainer>
     <P>Add Previous work</P>
     <form onSubmit={uploadeImage}>
     <UploadContainer>
        <ImageUpload>
        <img src={previewImage} alt="image" width={'180px'} height={'200px'}></img>
        
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
        <textarea style={{width:'300px',padding:'5px'}}></textarea> 
        <label>Description About Site</label>
     </Description>
        </div>

     <div>
     <label>site Location</label>
     <SiteLocation></SiteLocation>
     </div>

     </UploadContainer> 
     
     <Button type="submit">submit</Button>  
     <p>{uploadResponse.response}</p>
   </form>
      
     </SiteContainer>
    </>
}
const P = styled.h1`
padding-left:40px;
color:white;
`;
const SiteContainer = styled.div`
 height:350px;
 width:100%;
 padding-top:20px;
 background:orange;


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

display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
`;

const ImageUpload = styled.div`
 width:300px;
 display:flex;
 background:white;
`;

const Description = styled.div`
 height:100px;
 width:500px;
 background:white;
 border:none;
 border-radius:4px;
 margin-left:40px;
 padding:10px;
 display:flex;
 justify-content:space-between;
`;

const SiteLocation = styled.input`
  
`;
const Button = styled.button`
 height:30px;
 width:100px;
 margin:auto;
 border-radius:7px;
 border:none;
 margin-left:50%;
 background:white;
 color:orange;
 &:hover{
    curser:pointer;
 }
`;