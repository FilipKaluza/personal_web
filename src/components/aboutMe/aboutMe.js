import React from 'react';
import { Link } from "react-scroll";

// import Components
import AboutMe from "./React-typical/react-typical";
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Button  from 'antd/lib/button';

import { StyleSheet, css } from 'aphrodite';
import ScrollAnimation from 'react-animate-on-scroll';

//import photo
import PerPhoto from "../../assets/images/perphotowithoutbg.png";

const aboutMe = (props) => {
    
    const styles = StyleSheet.create({
        
        AboutMe: {
            height: "100vh",
            "@media (max-width: 740px)": {
                height: "800px"
            }
        },

        AboutMeMain: {
            height: "80vh",
            "@media (max-width: 740px)": {
                height: "650px"
            }
        },

        AboutMeButtons: {
            height: "20vh",
            "@media (max-width: 740px)": {
                height: "150px"
            }
        },

        PersonalText: {
            width: "50vw",
            height: "20vh",
            display: "flex",
            margin: "40vh 0 0 0",
            "@media (max-width: 740px)": {
                margin: "0",
                height: "200px"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                margin: "25vh 0 0 0",
                height: "50vh",
                padding: "25vh 0 0 0"
            }

        },
        PersonalFont: {
            fontSize: "40px",
            padding: "0 0 0 35px",
            color: "#fff",
            "@media (max-width: 740px)": {
                fontSize: "22px",
                padding: "80px 35px 0 35px"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                fontSize: "30px",
            }
        },

        PhotoCol: {
            width: "50vw",
            height: "50vh",
            margin: "25vh 0 0 0",
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 740px)": {
                margin: "20px 0 0 0",
                padding: "100px",
                width: "300px",
                height: "auto"
            },
        },

        Photo: {
            borderRadius: "50px 0 50px 50px",
            "@media (max-width: 740px)": {
                height: "300px",
                width: "auto",
                padding: "5px"
            }

        },

        TechButton: {
            display: "flex",
            justifyContent: "left",
            margin: "0 0 0 35px",
            "@media (max-width: 740px)": {
                margin: "0",
                justifyContent: "center"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                margin: "10vh auto",
                justifyContent: "center"
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
            "@media (max-width: 740px)": {
                width: "300px",
                margin: "35px 35px",
                fontSize: "20px",
                height: "50px"
            }
        }
    });

    return(
        <div className={css(styles.AboutMe )}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}  >
                <Row className={css(styles.AboutMeMain)} >
                    <Col className={css(styles.PersonalText)} xs={24} md={12}>
                        <h1 className={css(styles.PersonalFont)}>
                            <AboutMe  />
                        </h1>
                    </Col>
                    <Col className={css(styles.PhotoCol)} xs={24}  md={12}>
                        <img className={css(styles.Photo)} src={PerPhoto}  alt="personalphoto" />
                    </Col>
                </Row>
                <Row className={css(styles.AboutMeButtons)} >
                    <Col className={css(styles.TechButton)} xs={24} md={12}  >
                        <Link activeClass="active" to="Technologies" spy={true} smooth={true} offset={0} duration={1500} > <Button className={css(styles.Button)}> See my technologies </Button></Link>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </ScrollAnimation>
        </div>
    );
};

export default aboutMe;
