import React from 'react';

// import ant design components
import { ArrowDownOutlined } from'@ant-design/icons';

import { Link } from "react-scroll";

// import css
import "./arrowDown.css";

const arrowDown = (props) => {

    return (
        <div className="CenterDown" >
            <Link
                to="AboutMe"
                spy={false}
                smooth={true}
                offset={0}
                duration={1500} >
                <ArrowDownOutlined className="SizeOfIcon Color" />
            </Link>
        </div>
    );
};

export default arrowDown;