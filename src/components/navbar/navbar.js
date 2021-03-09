import React, { useState, useEffect } from 'react';

import { debounce } from "../utils/helpers"; 

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";


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
    
    
    const styles = StyleSheet.create({
        Navbar: {
            borderBottom: "2px solid #CC0000",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: "50",
            ":hover": {
                color: "#ccc"
            }
        },

        NavLink: {
            margin: "auto",
            fontSize: "25px",
            color: "#fff",
            fontFamily: "Courier New",
            ":hover": {
                color: "#CC0000"
            }
        },
        active: {
            color: "red"
   
        },
        navbarShow: {
            top: "0",
            transition: "top 0.6s",

        },
        navbarHide: {
            top: "-100px",
            transition: "top 0.6s",

        }

      })

    return(
        <header id="Navbar" className={css(styles.Navbar, visible ? styles.navbarShow : styles.navbarHide)}>
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Main" spy={true} smooth={true} offset={0} duration={1000} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Technologies" spy={true} smooth={true} offset={0} duration={1000} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Contact" spy={true} smooth={true} offset={0} duration={1000} > Contact </Link> 
        </header>
    );

};

export default Navbar;

