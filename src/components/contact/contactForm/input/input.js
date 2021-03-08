import React from 'react';

import "./input.css"

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case("input"):
            inputElement = <input type={props.elementType} className="form-control"  {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case("textarea"):
            inputElement = <textarea type={props.elementType} className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        default:
            inputElement = <input className="form-control" {...props.elementConfig}  value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={props.touched ? props.class : "form-group"}>
            <label htmlFor="name"> {props.name} </label>
            {inputElement}
        </div>

    );
};

export default input;