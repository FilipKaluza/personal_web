import React, { useState } from 'react';

// import components 
import SocSites from "../main/socSites/socSites";
import Input from "./contactForm/input/input";
import Spinner from "../UI/Spinner/Spinner";


// import checkValidity from utility:
import { checkValidity } from "../utils/utility"
import "./contact.css";

// import cookieImage
import Cookie from "../../assets/images/cookie-bite.svg";

const Contact = (props) => {
    const [contactForm, setContactForm] = useState({
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your Name",
                name: "Name"
            },
            value: "",
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Your E-mail",
                name: "E-mail"
            },
            value: "",
            validation: {
                required: true,
                minLength: 3,
                email: true
            },
            valid: false,
            touched: false
        },
        textarea: {
            elementType: "textarea",
            elementConfig: {
                type: "text",
                placeholder: "Your message",
                name: "Message"
            },
            value: "",
            validation: {
                required: true,
                minLength: 7
            },
            valid: false,
            touched: false
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);




    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...contactForm // copy my state object
        };

        const updatedFormElement = { ...updatedContactForm[inputIdentifier] }; //I need to have access to values in specific key

        updatedFormElement.value = event.target.value
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }

        setContactForm(updatedContactForm)
        setFormIsValid(formIsValid);
    }

    const formElementArray = [];
    for (let key in contactForm) {
        formElementArray.push({
            id: key,
            config: contactForm[key]
        });
    }

    

    let form = (<form onSubmit="#">
        {formElementArray.map(formElement => (
            <Input
                key={formElement.id}
                name={formElement.config.elementConfig.name}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => inputChangedHandler(event, formElement.id)}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                class= {formElement.config.valid  ? "form-group-valid" : "form-group-not-valid"} /> 
        ))}
        <button className={formIsValid ? "ContactButton" : "ContactButtonDissabled"} disabled={formIsValid ? "disabled" : false } > Send message </button>
    </form>)

    if (props.loading) {
        form = <Spinner />
    }

    const Name = "<Kaluza.DEV>"


    return (
        <div className="Contact" >
            <h1 className="ContactHeader"> Some questions ? Let me know</h1>
            <div className="ContactForm">
                {form}
            </div>
            <div className="Footer">
                <div className="SocSitesIconsFooter" >
                    <SocSites />
                </div>
                <p className="CookieInfo"> I don't collect and eat your <img src={Cookie} className="CookieImg" alt="CookieImg" /> </p>
                <p className="LogoFooter"> {Name} </p>
                <p className="MadeBy"> © 2021 Filip Kaluža </p>
            </div>
        </div>
    );
};

export default Contact;
