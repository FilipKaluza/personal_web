import React from 'react';

const TextareaInput = (props) => {
    return(
        <React.Fragment>
            <textarea type={props.elementType} className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed} />
        </React.Fragment>
    );
};

export default TextareaInput;