import React from 'react';

import { FundProjectionScreenOutlined, ClusterOutlined, CheckCircleOutlined } from '@ant-design/icons';


import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Typography from "antd/lib/typography";


const TechCards = (props) => {
    const frontend = ["Javascript", "React", "Ant Design", "Bootstrap", "CSS", "Pug"];
    const backend = ["Node.js", "Express.js", "Python", "MongoDB"];
    const projects = [
        { name: "BurgerBuilder", link: "https://burgerproject-reactive.web.app/" },
        { name: "Kaluza.dev", link: "http://localhost:3000/" }
    ]

    const { Title } = Typography;

    return(
        <Row gutter={16}>
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Front-end </Title>} >
                    <FundProjectionScreenOutlined className="TechIcon" />
                    {frontend.map(tech => <p key={ Math.random().toString(36).substr(2, 9) } > {tech} </p>)}
                </Card>
            </Col>
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Back-end </Title>}>
                    <ClusterOutlined className="TechIcon" />
                    {backend.map(techback  => <p key={ Math.random().toString(36).substr(2, 9) }> {techback} </p>)}
                </Card>
            </Col>
            <Col className="TechCard" xs={20} md={7}>
                <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Projects </Title>}>
                    <CheckCircleOutlined className="TechIcon" /> <br />
                    {projects.map(project => <a key={ Math.random().toString(36).substr(2, 9) }  href={project.link} > <p > {project.name} <br /></p> </a>)}
                    <p> More coming soon...</p>
                </Card>
            </Col>
        </Row>
    );
};

export default TechCards;