import React from 'react';

// import child components
import FrontendTech from "./frontendTech/frontendTech";
import BackendTech from "./backendTech/backendTech";
import Projects from "./projects/projects";

import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Typography from "antd/lib/typography";

import "./techCards.css";

const TechCards = (props) => {

    const { Title } = Typography;

    return(
        <Row gutter={16} className="TechnologiesCards" >
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Front-end </Title>} >
                    <FrontendTech />
                </Card>
            </Col>
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Back-end </Title>}>
                    <BackendTech />
                </Card>
            </Col>
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Projects </Title>}>
                    <Projects />
                </Card>
            </Col>
        </Row>
    );
};

export default TechCards;