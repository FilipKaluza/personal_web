import React from 'react';
import Col from "antd/lib/col";

import { ArrowDownOutlined } from '@ant-design/icons';

import {Link} from "react-scroll";


import "./scrollDownArrow.css";

const ScrollDownArrow = () => {

    return(
            <Col xs={24}>
                <Link className="ScrollDownArrow"  to="AboutMe" spy={true} smooth={true} offset={0} duration={1500} > 
                    <ArrowDownOutlined />
                </Link> 
            </Col>
    );
};

export default ScrollDownArrow;
