import React from 'react';

// import components
import SocSites from "../shared/socSites/socSites";
import ScrollDownArrow from "./scrollDownArrow/scrollDownArrow";
import MainIcons from "./mainIcons/mainIcons";

// Background
import ParticlesBg from "particles-bg";

// import images
import MainLogo from "../../assets/images/logoRed.svg";

// Ant design tools
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./main.css";

const Main = () => {
    let numOfLines = 15
    if (window.innerWidth > 1200) {
        numOfLines = 35
    } // it means more animated lines behind logo on larger screens

    return (
        <React.Fragment>
            <ParticlesBg color="#000000" num={numOfLines} type="lines" bg={true} />
            <Row className="MainLogoWithSocSites" >
                <Col xs={24} md={22} className="MainLogo" >
                    <img src={MainLogo} alt="MainLogo" />
                </Col>
                <Col xs={24} md={2} className="SocSitesMain"  >
                    <SocSites />
                </Col>
                <MainIcons />
                <ScrollDownArrow />
            </Row>
        </React.Fragment>
    );
};

export default Main;