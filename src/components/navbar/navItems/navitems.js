import React from 'react';
import Row from "antd/lib/row";

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";

const NavItems = (props) => {

    const styles = StyleSheet.create({
        NavLink: {
            margin: "auto",
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
        DesktopLogoInNav: {
            fontFamily: "'Wallpoet', cursive",
            fontSize: "36px",
            padding: "0 20px"
        }
    });
    const first = "<Kaluza."
    const second = "DEV />"

    return(
        <React.Fragment>
            < Link to="Main" smooth={true} offset={0} duration={1000} >
                <Row className={css(styles.DesktopLogoInNav)}>
                    <p className="Kaluza"> {first} </p><p className="DEV"> {second} </p>
                </Row>
            </Link>
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Main" spy={true} smooth={true} offset={0} duration={1000} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Technologies" spy={true} smooth={true} offset={0} duration={1000} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} to="Footer" spy={true} smooth={true} offset={0} duration={1000} > Contact </Link> 
        </React.Fragment>

    );
};

export default NavItems;