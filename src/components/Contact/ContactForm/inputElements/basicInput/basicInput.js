import React from 'react';

const Input = (props) => {
    return(
        <React.Fragment>
            <input type={props.elementType} className="form-control"  {...props.elementConfig} value={props.value} onChange={props.changed} />
        </React.Fragment>
    );
};

export default Input;
