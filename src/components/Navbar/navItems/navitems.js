import React from 'react';

import Logo from "../../shared/logo/logo";

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";

const NavItems = (props) => {

    const styles = StyleSheet.create({
        NavLink: {
            margin: "auto",
            padding: "0",
            fontSize: "25px",
            color: "#fff",
            ":hover": {
                color: "#CC0000"
            },
            "media (max-width: 500px)": {
                display: "block!important",
                width: "100vw",
                fontSize: "30px",
                margin: "15px 0",
            }
                
        },
        active: {
            color: "red"
   
        },
    });

    return(
        <React.Fragment>
            < Link to="Main" smooth={true} offset={0} duration={1000} >
                <Logo DesktopNav={true} />
            </Link>
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Main" spy={true} smooth={true} offset={0} duration={1500} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="AboutMe" spy={true} smooth={true} offset={0} duration={1500} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Technologies" spy={true} smooth={true} offset={-80} duration={1500} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Footer" spy={true} smooth={true} offset={30} duration={1500} > Contact </Link> 
        </React.Fragment>

    );
};

export default NavItems;