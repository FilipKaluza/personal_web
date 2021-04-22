import { Fragment } from 'react';

const TextareaInput = (props) => {
    return (
        <Fragment>
            <textarea type={props.elementType} className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed} />
        </Fragment>
    );
};

export default TextareaInput;