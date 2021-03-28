import React from 'react';

// import components
import Modal from "./mobileMenu/mobileMenu";
import MobileNavLogo from "./mobileNavLogo/mobileNavLogo";
import NavButton from "./navButton/navButton";

import { StyleSheet, css } from 'aphrodite';
import { useSelector } from "react-redux";

import Row from "antd/lib/row";

const MobileNavbar = (props) => {

    const menuOpen = useSelector( (state) => state.navItemReducer.clicked );

    const styles = StyleSheet.create({
        MobileNavbar: {
            width: "100vw",
            zIndex: "50",
            position: "fixed",
            backgroundColor: "#000"
        },

        MobileNavbarShow: {
            top: "0",
            transition: "top 0.6s",

        },
        MobileNavbarHide: {
            top: "-60px",
            transition: "top 0.6s",
        }
    });

    return (
        <Row className={css(styles.MobileNavbar, props.visible ? styles.MobileNavbarShow : styles.MobileNavbarHide)} >
            <MobileNavLogo />
            <NavButton menuOpen={menuOpen} />
            <Modal menuOpen={menuOpen} first={props.first} second={props.second}  />
        </Row>
    );
};

export default React.memo(MobileNavbar);

