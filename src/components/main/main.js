import React from 'react';

// import components
import Logo from "./logo/logo";
import SocSites from "../shared/socSites/socSites";
import ArrowDown from "./arrowDown/arrowDown";

import { Link } from "react-scroll";

import ParticlesBg from "particles-bg";

const main = (props) => {
    console.log("rendering main")
    return (

        <div>
            <ParticlesBg color="#000000" num={100} type="lines" bg={true} />
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