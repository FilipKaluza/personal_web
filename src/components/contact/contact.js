import React from 'react';

// import components 
import Footer from "./footer/footer";
import ContactForm from "./contactForm/ContactForm";

import "./contact.css";


// animation
import ScrollAnimation from "react-animate-on-scroll";


const Contact = (props) => {


    console.log("rendering contact")

    return (
        <React.Fragment  >
             <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                <ContactForm />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                <Footer />
            </ScrollAnimation>
        </React.Fragment>

    );
};

export default Contact;
