import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { previousWorkData } from "../redux/previousWorkState/previousWorkReducer";

const AdminPage = ()=>{
   const data = useSelector((state)=>state.authenticationData,)
   const uploadResponse = useSelector((state)=>state.previousWorkData,)
   
   console.log(uploadResponse.response)
   let is_available = false 

   data.items[0]?is_available = data.items[0].account_available:false      
      // console.log(data.items[0].account_available)

 const [selectedImage,setSelectedImage] = useState();
 const dispatch = useDispatch()

if(is_available){

    
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
         <input type="file" onChange={(event)=>setSelectedImage(event.target.files[0])}></input>
         <button type="submit">submit</button>
         <p>{uploadResponse.response}</p>
       </form>
      
    </>
}
else{
    return <>
        u are not admin
    </>
}
}

export default AdminPage;