import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { addPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
// import { styled } from "styled-components";
// import { useNavigate } from "react-router-dom";
// import Login from "./loginPage";
// import { useLocation } from "react-router-dom";
// import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import {sessionActionRequest } from "../redux/registerationState/authenticationAction";
import { AddSite } from "../components/addSite";
import { AddminNavBar } from "../components/adminNavBar";

const AdminPage = ()=>{
   const data = useSelector((state)=>state.authenticationData,)
 
   const session = useSelector((state)=>state.authenticationData.session,)

   console.log(session)    

const dispatch = useDispatch() 

 useEffect(()=>{ 

dispatch(sessionActionRequest())
  },[]) 
 
  // console.log(uploadResponse.response)
   let is_available = false 

   data.items[0]?is_available = data.items[0].account_available:false      
      // console.log(data.items[0].account_available)




if(session){ 

    return <>
      <AddminNavBar></AddminNavBar>
      <AddSite></AddSite>
      
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


