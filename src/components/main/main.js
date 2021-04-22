// import components
import Background from "./background/background";
import SocSites from "../shared/socSites/socSites";
import ScrollDownArrow from "./scrollDownArrow/scrollDownArrow";
import MainIcons from "./mainIcons/mainIcons";


// import images
import MainLogo from "../../assets/images/logoRed.svg";

// Ant design tools
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./main.css";

const Main = () => {

    return (
        <>
            <Background />
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