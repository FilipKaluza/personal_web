import React, {useState, useEffect} from 'react';

// import components
import SocSites from "../shared/socSites/socSites";

import MainLogo from "../../assets/images/logoRed.svg";

import ParticlesBg from "particles-bg";

import "./main.css";


const Main = (props) => {
    console.log("MAIN RENDERING")
    
    /* const [scrollDownText, setScrollDownText] = useState(true)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) && currentScrollPos > 0 || (prevScrollPos < currentScrollPos && prevScrollPos + currentScrollPos > 70))
    
        setPrevScrollPos(currentScrollPos);
      }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); 
    
    }, [prevScrollPos, visible, handleScroll]); */

    let numOfLines = 20
    if (window.innerWidth > 1200) {
        numOfLines = 45
    } // it means more animated lines behind logo on larger screens

    return (
        <div>
            <ParticlesBg color="#000000" num={numOfLines} type="lines" bg={true} />
            <img src={MainLogo} className="MainLogo" alt="MainLogo" />
            <div className="SocSitesMain" >
                <SocSites />
            </div>
        </div>
    );
};

export default Main;