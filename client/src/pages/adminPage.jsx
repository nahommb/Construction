import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { previousWorkData } from "../redux/previousWorkState/previousWorkReducer";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Login from "./loginPage";
import { useLocation } from "react-router-dom";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import {sessionActionRequest } from "../redux/registerationState/authenticationAction";

const AdminPage = ()=>{
   const data = useSelector((state)=>state.authenticationData,)
   const uploadResponse = useSelector((state)=>state.previousWorkData,)
   const session = useSelector((state)=>state.authenticationData.session,)

   console.log(session)  

const dispatch = useDispatch()

 useEffect(()=>{ 
// getData()
 console.log('leeeeeee')

dispatch(sessionActionRequest())
  },[]) 

  
  
   console.log(uploadResponse.response)
   let is_available = false 

   data.items[0]?is_available = data.items[0].account_available:false      
      // console.log(data.items[0].account_available)

 const [selectedImage,setSelectedImage] = useState();
 


 axios.defaults.withCredentials=true


 //const [sessionAvailable,setSession] = useState(session);


//  const getData = async()=>{
//      await axios.get('http://localhost:3001/admin/').then((data)=>{
//          if(!session){
//           console.log(data.data.exists)
//           setSession(data.data.exists)
//          }
      
//     })
        
//  }
    

//console.log(sessionAvailable) 

if(session){ 

    
const uploadeImage = (e)=>{

    e.preventDefault();
   const formData = new FormData()
    formData.append('image',selectedImage)
   console.log(selectedImage)
   console.log(formData)

   dispatch(addPreviousWorkAction(formData))
  

}
    return <>
       <p>enter Previous work</p>
       <form onSubmit={uploadeImage}>
        <textarea/>
        <Label for='image_input'>

        Uploade Image
        </Label>
         <Input id="image_input" type="file" onChange={(event)=>setSelectedImage(event.target.files[0])}></Input>
         <button type="submit">submit</button>
         <p>{uploadResponse.response}</p>
       </form>
      
    </>
}
else{
    return <>
       not admin 
        {/* <Login></Login> */}
    </>
}
}

export default AdminPage;


 const Label = styled.label`
  ${'' /* border:2px solid red; */}
  background:orange;
  border-radius:4px;
  padding:12px;
  color:white;
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