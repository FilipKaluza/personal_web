import React from 'react';

import SocSites from "../../shared/socSites/socSites";

// import cookieImage
import Cookie from "../../../assets/images/cookie-bite.svg"

const Footer = (props) => {
    console.log("rendering Footer")

    const Name = "<Kaluza.DEV />"

    return(
        <div className="Footer">
            <div className="SocSitesIconsFooter" >
                <SocSites />
            </div>
            <p className="CookieInfo"> I don't collect and eat your <img src={Cookie} className="CookieImg" alt="CookieImg" /> </p>
            <p className="LogoFooter"> {Name} </p>
            <p className="MadeBy"> © 2021 Filip Kaluža </p>
        </div>
    );
};

export default React.memo(Footer);
