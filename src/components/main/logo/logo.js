import React from 'react';

import { Row } from 'antd';

import "./logo.css";

const logo = (props) => {
    const first = "<KALUZA."
    const second = "DEV />"

    return (

        <Row >
            <p className="Kaluza"> {first} </p><p className="DEV"> {second} </p>
        </Row>

    )
}

export default logo;