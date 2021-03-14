import React from 'react';

import Row from 'antd/lib/row';

import "./logo.css";

const logo = (props) => {
    const first = "<Kaluza."
    const second = "DEV />"

    return (
        <Row className="MainLogo" >
            <p className="Kaluza"> {first} </p><p className="DEV"> {second} </p>
        </Row>

    )
}

export default logo;