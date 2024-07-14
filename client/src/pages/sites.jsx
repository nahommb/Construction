import { useEffect } from "react";
import PreviousWork from "../components/previousWorks";
import Services from "../components/services";
import SiteBanner from "../components/siteBanner";
import SiteDescription from "../components/siteDescription";
import SiteFooter from "../components/siteFooter";
import SiteNavbar from "../components/siteNavbar";
import SiteValue from "../components/siteValue";
import { useDispatch } from "react-redux";
import { register } from "../redux/registerationState/authenticationAction";
import { getPreviousWorkAction } from "../redux/previousWorkState/previousWorkAction";
import ChapaPayment from "../components/test";


const Sites = ()=>{

const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(getPreviousWorkAction())
 },[])
   

    return<>
        <SiteNavbar name = 'abebe'/>
        <SiteBanner></SiteBanner>
        <SiteDescription></SiteDescription>
        <Services></Services>
        <SiteValue title = '' heading = ''></SiteValue>
        <PreviousWork></PreviousWork>
        {/* <ChapaPayment></ChapaPayment> */}
        <br></br>
        {/* <SiteValue></SiteValue> */}

        <SiteFooter></SiteFooter>

    </>
}
export default Sites;