import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { Link } from "react-scroll";

import SocSites from "..//../../main/socSites/socSites";

const Modal = (props) => {

    const styles = StyleSheet.create({
        Modal: {
            width: "100vw",
            margin: "55px 0 0 0",
            height: "100vh",
        },
        ModalHidden: {
            display: "none"
        },
        NavLink: {
            color: "#fff",
            display: "block",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            margin: "15px 0",
        },


    })

    return (
        <div onClick={props.clicked} className={props.open ? css(styles.Modal) : css(styles.ModalHidden)} onClick={props.clicked}>
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} onClick={props.clicked} to="Main" spy={true} smooth={true} offset={0} duration={1000} > Home </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} onClick={props.clicked} to="AboutMe" spy={true} smooth={true} offset={0} duration={1000} > AboutMe </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} onClick={props.clicked} to="Technologies" spy={true} smooth={true} offset={0} duration={1000} > Technologies </Link> 
            <Link  className={css(styles.NavLink)} activeClass={css(styles.active)} onClick={props.clicked} to="Contact" spy={true} smooth={true} offset={0} duration={1000} > Contact </Link> 
            <SocSites />
        </div>
    );
};

export default Modal;
