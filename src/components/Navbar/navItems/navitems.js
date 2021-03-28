import React from 'react';

import { useDispatch } from "react-redux";

import { StyleSheet, css } from 'aphrodite';

import { Link  } from "react-scroll";

import { fadeIn } from 'react-animations';


const NavItems = (props) => {

    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        NavLink: {
            margin: "auto",
            padding: "0",
            fontSize: "25px",
            color: "#fff",
            ":hover": {
                color: "#CC0000"
            },

            "@media (max-width: 741px)": {
                color: "#fff",
                display: "block",
                width: "100vw",
                fontSize: "30px",
                margin: "15px auto",
                textAlign: "center",
                animationName: fadeIn, 
                animationDuration: '2s',
            }
                
        },
        active: {
            color: "red"
        }

    });

    const navItems = ["Home", "AboutMe", "Technologies", "Contact"];

    const links = navItems.map(item => <Link key={navItems.indexOf(item)} className={css(styles.NavLink)} onClick={() => dispatch({type: "NAVCLICKED"})}  activeClass={css(styles.active)} to={item} spy={true} smooth={true} offset={0} duration={1500} > {item} </Link> )

    return(
        <React.Fragment>
            {links}
        </React.Fragment>
    );
};


export default React.memo(NavItems);