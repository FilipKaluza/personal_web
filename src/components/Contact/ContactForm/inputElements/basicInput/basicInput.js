import { Fragment } from 'react';

const Input = (props) => {
    return (
        <Fragment>
            <input type={props.elementType} className="form-control"  {...props.elementConfig} value={props.value} onChange={props.changed} />
        </Fragment>
    );
};

export default Input;
