import React from 'react';

import "./sendEmailButton.css";

const SendEmailButton = (props) => {

    let button = <button className="ContactButtonDissabled" disabled="disabled"> Please fill in all fields </button>
    if (props.formIsValid) {
        button = <button type="submit" className="ContactButton" > Send message </button>
    }

    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    );
};

export default React.memo(SendEmailButton);
