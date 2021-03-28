import React, { useState, useEffect } from 'react';

import { debounce } from "../utils/helpers"; 

//import components
import DestkopNavbar from "./desktopNavbar/desktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./navItems/navitems";

const Navbar = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    console.log("Navbar renedring")

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) && currentScrollPos > 0 || (prevScrollPos < currentScrollPos && prevScrollPos + currentScrollPos > 70))
        // logic above means, show visible navbar when user scroll down or up more than 70px, debounce is for better performance, funcion above will apply after 0,5s when user stop scrolling 

        setPrevScrollPos(currentScrollPos);
      }, 500); 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); 
    
    }, [prevScrollPos, visible, handleScroll]);


    let Navbar =   <React.Fragment > <DestkopNavbar visible={visible} >  <NavItems/>  </DestkopNavbar> </React.Fragment>

    if (window.innerWidth < 741) {
        Navbar =  <React.Fragment >  <MobileNavbar visible={visible} />  </React.Fragment>
    } // it which help us show corrent navbar

    return(
        <header id="Navbar" >
            {Navbar}
        </header>
    );

};

export default React.memo(Navbar);

