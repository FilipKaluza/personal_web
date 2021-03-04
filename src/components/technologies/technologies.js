import React, {useState} from 'react';
import { Row, Col } from 'antd';
import { DownSquareOutlined, CloseOutlined } from '@ant-design/icons';

// import Components
import AboutMe from "../../components/animations/React-typical/react-typical";

// import CSS
import "./technologies.css"


const Technologies = (props) => {

    const [techOpen, setTechOpen] = useState(false);

    const technologies = ["Javascript", "React", "Node.js", "Express.js", "Python", "Ant Design", "Bootstrap", "CSS"];

    const openOrCloseTech = () => {
        setTechOpen(!techOpen)
    };




    return (
        <Row className="AboutMe">
            <Col xs={24} md={12}>
                <div className="PersonalText">
                    <h1>
                        <AboutMe />
                    </h1>
                </div>
            </Col>
            
           {/*  <Col xs={24} md={12}>
                <div className="Technologies">
                    {techOpen ?
                    <div>
                        <ul className={techOpen ? "TechList": "TechListClosed"}> 
                            { technologies.map(technology => <li> {technology} </li>) }
                            <CloseOutlined className="TechButton" onClick={() => openOrCloseTech()} > Hide Technologies </ CloseOutlined>
                        </ul>
                        
                    </div>
                        : 
                        <div className="TechHidden">
                            <p> Click on button bellow to see our technologies </p>
                            <DownSquareOutlined  className="TechButton" onClick={() => openOrCloseTech()} > More about my technologies </ DownSquareOutlined>
                    </div>  }
                </div>
                                        
            </Col> */}
            
            
        </Row>
       
    )
}

export default Technologies;