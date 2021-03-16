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
            "@media (max-width: 740px)": {
                display: "none"
            }
        },

        MobileOnly: {
            "@media (min-width: 741px)": {
                display: "none"
            }
        }
    })

    const first = "<Kaluza."
    const second = "DEV />"

    return(
        <header id="Navbar" >
            <div className={css(styles.DestkopOnly)}>
                <DestkopNavbar visible={visible} >
                    <NavItems first={first} second={second} />
                </DestkopNavbar>
            </div>
            <div className={css(styles.MobileOnly)} >
                <MobileNavbar visible={visible} first={first} second={second}/>
            </div>
        </header>
        

    );

};

export default Navbar;

