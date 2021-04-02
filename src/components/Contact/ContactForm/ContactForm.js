import React, {useState} from 'react';

// import components
import ContactFromHeader from "./contactFormHeader/contactFormHeader";
import Input from "./inputElements/inputElements";
import Spinner from "../../shared/spinner/spinner";
import SendEmailButton from "./sendEmailButton/sendEmailButton";
import EmailResponse from "./emailRes/emailRes";


// import emailjs
import emailjs from 'emailjs-com';

// import checkValidity from utility:
import { checkValidity } from "../../utils/utility"

// import css
import "./ContactForm.css";

const ContactForm = (props) => {

    const [contactForm, setContactForm] = useState({
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your Name",
                name: "name"
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
                name: "email"
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
                name: "message"
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
    const [loading, setLoading] = useState(false);
    const [emailSentSuccessfully, setEmailSentSuccessfully] = useState(null)

    const formLoading = () => {
        setLoading(loading => !loading)
    }

    console.log("Contact Rendering")

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

    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_oezhm0a', 'template_9nqw8hj', e.target, 'user_Cr5I5iz3IOX0l68E7VGju')
            .then((result) => {
                setLoading()
                setEmailSentSuccessfully("Email sent successfully. Thank you for your message. I'll reply you as soon as possible :)")
                setTimeout(() => {
                    setEmailSentSuccessfully(null)
                }, 10000)
            }, (error) => {
                setLoading()
                setEmailSentSuccessfully("Something went wrong, please try again")
                setTimeout(() => {
                    setEmailSentSuccessfully(null)
                }, 10000)
            });
            e.target.reset()
            formLoading()
    };

    const formElementArray = [];
    for (let key in contactForm) {
        formElementArray.push({
            id: key,
            config: contactForm[key]
        });
    }

    
    let form = formElementArray.map(formElement => (
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
    ));


    if (loading) {
        form = <Spinner />
    }

    return(
        <React.Fragment>
            <ContactFromHeader />
            <div className="ContactForm">
                <form onSubmit={sendEmail} >
                    {form}
                    <SendEmailButton formIsValid={formIsValid} />
                </form>
            </div>
            <EmailResponse emailSuccess={emailSentSuccessfully} />
        </React.Fragment>
    );
};

export default ContactForm;
