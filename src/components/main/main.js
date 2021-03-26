import React from 'react';

// import components
import SocSites from "../shared/socSites/socSites";
import ArrowDown from "./arrowDown/arrowDown";

import MainLogo from "../../assets/images/logoRed.svg";

import ParticlesBg from "particles-bg";

import "./main.css";


const Main = (props) => {
    let numOfLines = 20
    if (window.innerWidth > 1000) {
        numOfLines = 50
    } 

    return (
        <div>
            <ParticlesBg color="#000000" num={numOfLines} type="lines" bg={true} />
            <img src={MainLogo} className="MainLogo" alt="MainLogo" />
            <div className="SocSitesMain" >
                <SocSites />
            </div>
            <ArrowDown />
        </div>
    );
};

export default Main;