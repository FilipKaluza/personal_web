import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";


const navbar = (props) => {
    
    
    const styles = StyleSheet.create({
        Navbar: {
            borderBottom: "2px solid #CC0000",
            backgroundColor: "#000",
            width: "100%;",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: "50"
        },

        NavLink: {
            margin: "auto",
            fontSize: "25px",
            color: "#fff",
            fontFamily: "Courier New",
            ":hover": {
                color: "#ccc"
            },
    
        },

        

      })

    return(
        <div className={css(styles.Navbar)}>
            <Link  className={css(styles.NavLink)} activeClass="active" to="Main" spy={true} smooth={true} offset={0} duration={1000} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass="active" to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass="active" to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass="active" to="Footer" spy={true} smooth={true} offset={0} duration={1000} > Footer </Link> 
        </div>
    );

};

export default navbar;

