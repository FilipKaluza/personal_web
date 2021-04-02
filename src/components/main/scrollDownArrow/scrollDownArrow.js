import React from 'react';

import { ArrowDownOutlined } from '@ant-design/icons';
import {Link} from "react-scroll";

import "./scrollDownArrow.css";

const ScrollDownArrow = () => {

    return(
        <Link className="ScrollDownArrow"  to="AboutMe" spy={false} smooth={false} offset={0} > 
            <ArrowDownOutlined />
        </Link> 
    );
};

export default ScrollDownArrow;
