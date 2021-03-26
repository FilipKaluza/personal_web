import React from 'react';

// import components
import Logo from "../shared/logo/logo";
import SocSites from "../shared/socSites/socSites";
import ArrowDown from "./arrowDown/arrowDown";

import ParticlesBg from "particles-bg";


const Main = (props) => {
    let numOfLines = 20
    if (window.innerWidth > 1000) {
        numOfLines = 40
    } 

    return (
        <div>
            <ParticlesBg color="#cc0000" num={numOfLines} type="lines" bg={true} />
            <Logo MainLogo={true} />
            <div className="SocSitesMain" >
                <SocSites />
            </div>
            <ArrowDown />
        </div>
    );
};

export default Main;