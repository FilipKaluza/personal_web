import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";

const NavItems = (props) => {

    const styles = StyleSheet.create({
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
   
        }
    });

    return(
        <React.Fragment>
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Main" spy={true} smooth={true} offset={0} duration={1000} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Technologies" spy={true} smooth={true} offset={0} duration={1000} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Contact" spy={true} smooth={true} offset={0} duration={1000} > Contact </Link> 
        </React.Fragment>

    );
};

export default NavItems;