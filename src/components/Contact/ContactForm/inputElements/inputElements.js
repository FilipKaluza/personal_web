import React from 'react';

// inport inputs
import BasicInput from "./basicInput/basicInput";
import TextareaInput from "./textareaInput/textareaInput";

import "./inputElements.css"

const Inputs = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case("input"):
            inputElement = <BasicInput {...props} />
            break;
        case("textarea"):
            inputElement = <TextareaInput {...props} />
            break;
        default:
            inputElement = <BasicInput {...props} />
    }

    return (
        <div className={props.touched ? props.class : "form-group"}>
            {inputElement}
        </div>

    );
};

export default Inputs;