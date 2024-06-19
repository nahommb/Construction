import PreviousWork from "../components/previousWorks";
import Services from "../components/services";
import SiteBanner from "../components/siteBanner";
import SiteDescription from "../components/siteDescription";
import SiteFooter from "../components/siteFooter";
import SiteNavbar from "../components/siteNavbar";
import SiteValue from "../components/siteValue";

const Sites = ()=>{




    return<>
        <SiteNavbar name = 'abebe'/>
        <SiteBanner></SiteBanner>
        <SiteDescription></SiteDescription>
        <Services></Services>
        <SiteValue title = '' heading = ''></SiteValue>
        <PreviousWork></PreviousWork>
        <br></br>
        {/* <SiteValue></SiteValue> */}

        <SiteFooter></SiteFooter>

    </>
}
export default Sites;