import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { FundProjectionScreenOutlined, ClusterOutlined, CheckCircleOutlined } from '@ant-design/icons';

import { Link } from "react-scroll";


// import CSS
import "./technologies.css"


const Technologies = (props) => {


    const frontend = ["Javascript", "React", "Ant Design", "Bootstrap", "CSS", "Pug"];
    const backend = ["Node.js", "Express.js", "Python", "MongoDB"];
    const projects = [
        { name: "BurgerBuilder", link: "https://burgerproject-reactive.web.app/" },
        { name: "Kaluza.dev", link: "http://localhost:3000/" }
    ]

    const { Title } = Typography;




    return (
        <div className="site-card-wrapper Technologies">
            <h1 className="TechnologiesHeader"> Technologies </h1>
            <div className="TechnologiesCards" >
                <Row gutter={16}>
                    <Col className="TechCard" xs={20} md={7}>
                        <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Front-end </Title>} >
                            <FundProjectionScreenOutlined className="TechIcon" />
                            {frontend.map(tech => <p key={backend.indexOf[tech]}> {tech} </p>)}
                        </Card>
                    </Col>
                    <Col className="TechCard" xs={20} md={7}>
                        <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Back-end </Title>}>
                            <ClusterOutlined className="TechIcon" />
                            {backend.map(tech  => <p key={backend.indexOf[tech]}> {tech} </p>)}
                        </Card>
                    </Col>
                    <Col className="TechCard" xs={20} md={7}>
                        <Card title={<Title style={{ fontFamily: "Courier", fontSize: "30px", }} >Projects </Title>}>
                            <CheckCircleOutlined className="TechIcon" /> <br />
                            {projects.map(project => <a key={backend.indexOf[project]} href={project.link} > <p> {project.name} <br /></p> </a>)}
                            <p> More coming soon...</p>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="TechButtonForContactWrapper" >
                <Col xs={24}  >
                    <Link  activeClass="active" to="Footer" spy={true} smooth={true} offset={0} duration={1000} > <button > Contact Me</button></Link>
                </Col>
            </div>

        </div>);


}

export default Technologies;