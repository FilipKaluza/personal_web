import React from 'react';

// import Components
import TechButton from "./techButton/techButton";
import TechCards from "./techCards/techCards"


// import CSS
import "./technologies.css"
import ScrollAnimation from 'react-animate-on-scroll';


const Technologies = (props) => {

    return (
        <div className="site-card-wrapper Technologies">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                <h1 className="TechnologiesHeader"> Technologies </h1>
                <div className="TechnologiesCards" >
                        <TechCards />
                    
                </div>
            </ScrollAnimation>
            <div className="TechButtonForContactWrapper" >
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                    <TechButton />
                </ScrollAnimation>
            </div>
        </div>);


}


export default Technologies;