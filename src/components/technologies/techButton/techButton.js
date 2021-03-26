import React from 'react';

import { Link } from "react-scroll";
import Col from "antd/lib/col";

import "./techButton.css";


const TechButton = (props) => {
    return (
        <Col xs={24}  >
            <Link  activeClass="active" to="Footer" spy={true} smooth={true} offset={0} duration={1500} > <button > Contact Me</button></Link>
        </Col>
    );
};

export default TechButton;
