import { Fragment } from 'react';

// import components 
import FooterInfo from "./footerInfo/footerInfo";
import ContactForm from "./ContactForm/ContactForm";

// animation
import ScrollAnimation from "react-animate-on-scroll";


const Contact = (props) => {
    return (
        <Fragment  >
             <ScrollAnimation animateIn="fadeIn" animateOnce={true}  >
                <ContactForm />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}   >
                <FooterInfo />
            </ScrollAnimation>
        </Fragment>
    );
};

export default Contact;
