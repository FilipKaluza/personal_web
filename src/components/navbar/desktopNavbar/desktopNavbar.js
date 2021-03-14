import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import ScrollUp from "./scrollToTop/scrollToTop";

import { Link } from "react-scroll";


const DestkopNavbar = (props) => {

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
            left: "0",
            padding: "0 0 25px 35px",
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
        <div id="DestkopNavbar" className={css(styles.Navbar, props.visible ? styles.navbarShow : styles.navbarHide)}>
            {props.children}
            <Link className={css(styles.ButtonUp, props.visible ? styles.ButtonUpShow : styles.ButtonUpHide)} to="Main" spy={false} smooth={true} offset={0} duration={1000} > <ScrollUp />  </Link> 
        </div>
    );
};

export default DestkopNavbar;
