import React, { useState, useEffect } from 'react';

import { debounce } from "../../utils/helpers"; 

import { StyleSheet, css } from 'aphrodite';

import ScrollUp from "./scrollToTop/scrollToTop";

import { Link } from "react-scroll";


const DestkopNavbar = (props) => {

    // state for DesktopNav
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
        Navbar: {
            borderBottom: "2px solid #CC0000",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: "50",
            ":hover": {
                color: "#ccc"
            },

        },
        navbarShow: {
            top: "0",
            transition: "top 0.6s",

        },
        navbarHide: {
            top: "-100px",
            transition: "top 0.6s",

        },
        ButtonUp: {
            fontSize: "50px",
            position: "fixed",
            bottom: "0",
            right: "0",
            padding: "0 35px 25px 0",
            color: "#CC0000",
            transition: "bottom 0.6s",
            ":hover": {
                color: "#CC0000",
            }
        },

        ButtonUpShow: {
            bottom: "0",
            transition: "bottom 0.6s",
        },

        ButtonUpHide: {
            bottom: "-100px",
            transition: "bottom 0.6s",
        }

    });

    return(
        <div id="DestkopNavbar" className={css(styles.Navbar, visible ? styles.navbarShow : styles.navbarHide)}>
            {props.children}
            <Link className={css(styles.ButtonUp, visible ? styles.ButtonUpShow : styles.ButtonUpHide)} to="Main" spy={false} smooth={true} offset={0} duration={1000} > <ScrollUp />  </Link> 
        </div>
    );
};

export default DestkopNavbar;
