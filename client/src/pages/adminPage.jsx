import { useSelector } from "react-redux";

const AdminPage = ()=>{
   const data = useSelector((state)=>state.authenticationData,)
   console.log(data.items[0].account_available)

if(data.items[0].account_available===true){
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