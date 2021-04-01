import React from 'react';

import ReactIcon from "../../../assets/images/react-js.svg";
import JS from "../../../assets/images/js.svg";
import NodeJS from "../../../assets/images/node-js.svg";

import "./mainIcons.css";

const MainIcons = () => {
    return(
        <div className="MainIcons" >
            <img src={ReactIcon} alt="ReactIcon" />
            <img src={JS} alt="ReactIcon" />
            <img src={NodeJS} alt="ReactIcon" />
        </div>
    );
};

export default MainIcons;
