import React from 'react';
import { Link } from "react-scroll";

// import Components
import AboutMe from "../../components/animations/React-typical/react-typical";
import { Row, Col, Button } from 'antd';


import { StyleSheet, css } from 'aphrodite';

//import photo
import PerPhoto from "../../assets/images/perphoto.png";



const aboutMe = (props) => {
    
    const styles = StyleSheet.create({
        
        AboutMe: {
            height: "100%"
        },

        AboutMeMain: {
            height: "80%"
        },

        AboutMeButtons: {
            height: "20%"
        },

        PersonalText: {
            width: "50vw",
            height: "20vh",
            display: "flex",
            margin: "40vh 0 0 0",
            "@media (max-width: 500px)": {
                margin: "0"
            }
        },
        PersonalFont: {
            fontSize: "40px",
            padding: "0 0 0 35px",
            color: "#fff",
            fontFamily: "'Courier New', Courier, monospace",
            "@media (max-width: 500px)": {
                fontSize: "22px",
                padding: "35px 35px"
            }
        },

        PhotoCol: {
            width: "50vw",
            height: "50vh",
            margin: "25vh 0 0 0",
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 500px)": {
                padding: "35px 35px",
                margin: "0",
                width: "300px",
                height: "300px"
            }
        },

        Photo: {
            borderRadius: "50px 0 50px 50px",
        },

        TechButton: {
            display: "flex",
            justifyContent: "left",
            margin: "0 0 0 35px",
            "@media (max-width: 500px)": {
                margin: "0"
            }
        },

        Button: {
            width: "500px",
            height: "80px",
            fontSize: "30px",
            ":hover": {
                backgroundColor: "#CC0000",
                color: "#fff",
                border: "none"
            },
            "@media (max-width: 500px)": {
                width: "300px",
                margin: "35px 35px",
                fontSize: "20px",
                height: "50px"
            }
        }
    });


    return(
        <div className={css(styles.AboutMe )}>
            <Row className={css(styles.AboutMeMain)} >
                <Col className={css(styles.PersonalText)} xs={24} md={12}>
                    <h1 className={css(styles.PersonalFont)}>
                        <AboutMe  />
                    </h1>
                </Col>
                <Col className={css(styles.PhotoCol)} xs={24} md={12}>
                    <img className={css(styles.Photo)} src={PerPhoto}  alt="personalphoto" />
                </Col>
            </Row>
            <Row className={css(styles.AboutMeButtons)} >
                <Col className={css(styles.TechButton)} xs={24} md={12}  >
                    <Link activeClass="active" to="Technologies" spy={true} smooth={true} offset={0} duration={1000} > <Button className={css(styles.Button)}> See my technologies </Button></Link>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </div>
        
        
    );
};

export default aboutMe;
