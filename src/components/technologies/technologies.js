import { Fragment } from 'react';

// import Components
import TechButton from "./techButton/techButton";
import TechCards from "./techCards/techCards"

// import CSS
import "./technologies.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Technologies = (props) => {

    return (
        <Fragment>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                <h1 className="TechnologiesHeader"> Technologies </h1>
            </ScrollAnimation>
            <TechCards />
            <TechButton />
        </Fragment>
    );
};

export default Technologies;