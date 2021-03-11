import React from 'react';

// import components
import Logo from "./logo/logo";
import SocSites from "./socSites/socSites";
import ArrowDown from "./arrowDown/arrowDown";

import { Link } from "react-scroll";

import ParticlesBg from "particles-bg";

const main = (props) => {
    return (

        <div>
            <ParticlesBg color="#000000" num={50} type="lines" bg={true} />
            <Logo />
            <SocSites />
            <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            > <ArrowDown /></Link>
        </div>
    );
};

export default main;