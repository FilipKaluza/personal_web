import React from 'react';
import Row from "antd/lib/row";

import SocSites from "../../shared/socSites/socSites";

// import cookieImage
import Cookie from "../../../assets/images/cookie-bite.svg"

import "./footerInfo.css";

const Footer = (props) => {
    const first = "<Kaluza."
    const second = "DEV />"

    return(
        <div className="Footer">
            <div className="SocSitesIconsFooter" >
                <SocSites />
            </div>
            <p className="CookieInfo"> I don't collect and eat your <img src={Cookie} className="CookieImg" alt="CookieImg" /> </p>
            <Row className="LogoFooter">
                <p className="Kaluza"> {first} </p><p className="DEV"> {second} </p>
            </Row>
            <p className="MadeBy"> © 2021 Filip Kaluža </p>
        </div>
    );
};

export default React.memo(Footer);
