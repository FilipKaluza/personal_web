// import components
import SocSites from "../shared/socSites/socSites";
import ScrollDownArrow from "./scrollDownArrow/scrollDownArrow";
import MainIcons from "./mainIcons/mainIcons";

// Background
import Particles from 'react-particles-js';

// import images
import MainLogo from "../../assets/images/logoRed.svg";

// Ant design tools
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./main.css";

const Main = () => {
    let numOfLines = 15
    if (window.innerWidth > 1200) {
        numOfLines = 25
    } // it means more animated lines behind logo on larger screens

    return (
        <>
            <div className="BG">
                <Particles
                    width="100vw"
                    height="100vh"
                    params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                                "speed": 1,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
            </div>
           
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
        </>
    );
};

export default Main;