import AboutMeText from "./aboutMeText/aboutMeText";
import PersonalPhoto from "./personalPhoto/personalPhoto";
import TechButton from "./aboutMeButton/aboutMeButton";

import Row from 'antd/lib/row';

import { StyleSheet, css } from 'aphrodite';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = (props) => {
    
    const styles = StyleSheet.create({

        AboutMeMain: {
            height: "80vh",
            "@media (max-width: 740px)": {
                height: "650px"
            }
        },
    });

    return(
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}  >
            <Row className={css(styles.AboutMeMain)} >
                <AboutMeText />
                <PersonalPhoto />
            </Row>
            <TechButton />
        </ScrollAnimation>
    );
};

export default AboutMe;
