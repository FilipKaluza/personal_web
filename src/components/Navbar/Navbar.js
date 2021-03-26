import React, { useState, useEffect } from 'react';

import { debounce } from "../utils/helpers"; 

//import components
import DestkopNavbar from "./desktopNavbar/desktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./navItems/navitems";

const Navbar = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) && currentScrollPos > 0 || (prevScrollPos < currentScrollPos && prevScrollPos + currentScrollPos > 70))
    
        setPrevScrollPos(currentScrollPos);
      }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); 
    
    }, [prevScrollPos, visible, handleScroll]);


    let Navbar =   <React.Fragment > <DestkopNavbar visible={visible} >  <NavItems/>  </DestkopNavbar> </React.Fragment>

    if (window.innerWidth < 741) {
        Navbar =  <React.Fragment >  <MobileNavbar visible={visible} />  </React.Fragment>
    }

    return(
        <header id="Navbar" >
            {Navbar}
        </header>
        

    );

};

export default Navbar;

