import SocSites from "../../shared/socSites/socSites";

// import Images
import Cookie from "../../../assets/images/cookie-bite.svg";
import FooterLogo from "../../../assets/images/logoRed.svg";

import "./footerInfo.css";

const FooterInfo = (props) => {

    return(
        <div className="Footer">
            <div className="SocSitesIconsFooter" >
                <SocSites />
            </div>
            <p className="CookieInfo"> I don't collect and eat your <img src={Cookie} className="CookieImg" alt="CookieImg" /> </p>
            <div className="FooterLogo" >
                <img src={FooterLogo} alt="FooterLogo"/>
            </div>
            <p className="MadeBy"> © 2021 Filip Kaluža </p>
        </div>
    );
};

export default FooterInfo;
