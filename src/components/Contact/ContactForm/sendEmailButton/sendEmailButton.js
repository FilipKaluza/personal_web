import { memo, Fragment } from 'react';

import "./sendEmailButton.css";

const SendEmailButton = (props) => {

    let button = <button className="ContactButtonDissabled" disabled="disabled"> Please fill in all fields </button>
    if (props.formIsValid) {
        button = <button type="submit" className="ContactButton" > Send message </button>
    }

    return (
        <Fragment>
            {button}
        </Fragment>
    );
};

export default memo(SendEmailButton);
