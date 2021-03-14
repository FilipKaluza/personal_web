import React, { useState, useEffect } from 'react';

import { debounce } from "../utils/helpers"; 

//import components
import DestkopNavbar from "./desktopNavbar/desktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./navItems/navitems";

import { StyleSheet, css } from 'aphrodite';

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

    const styles=StyleSheet.create({
        DestkopOnly: {
            "@media (max-width: 600px)": {
                display: "none"
            }
        },

        MobileOnly: {
            "@media (min-width: 601px)": {
                display: "none"
            }
        }
    })

    return(
        <header id="Navbar" >
            <div className={css(styles.DestkopOnly)}>
                <DestkopNavbar visible={visible} >
                    <NavItems />
                </DestkopNavbar>
            </div>
            <div className={css(styles.MobileOnly)} >
                <MobileNavbar visible={visible} />
            </div>
        </header>
        

    );

};

export default Navbar;

