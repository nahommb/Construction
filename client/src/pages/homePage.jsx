import Banner from "../components/banner";
import { Location } from "../components/location";
import Navbar from "../components/navbar";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const HomePage =()=>{

   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(getPreviousWorkAction())
     },[])
   return <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Location></Location>
   </>
}

export default HomePage;