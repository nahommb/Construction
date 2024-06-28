import { useSelector } from "react-redux";

const AdminPage = ()=>{
   const data = useSelector((state)=>state.authenticationData,)
   
   let is_available = false

   data.items[0]?is_available = data.items[0].account_available:false      
      // console.log(data.items[0].account_available)

if(is_available){
    return <>
        hello admin
    </>
}
else{
    return <>
        u are not admin
    </>
}
}

export default AdminPage;