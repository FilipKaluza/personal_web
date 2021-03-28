import React from 'react';

// import child components
import DesktopNavLogo from "./desktopNavLogo/desktopNavLogo";

import { StyleSheet, css } from 'aphrodite';

import ScrollUp from "./scrollToTop/scrollToTop";

const DestkopNavbar = (props) => {
    
    const styles=StyleSheet.create({
        Navbar: {
            borderBottom: "2px solid #CC0000",
            backgroundColor: "#000",
            width: "100vw",
            height: "80px",
            display: "flex",
            alignItems: "center",
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
        }
    });

    return(
        <div id="DestkopNavbar" className={css(styles.Navbar, props.visible ? styles.navbarShow : styles.navbarHide)}>
            <DesktopNavLogo />
            {props.children}
            <ScrollUp visible={props.visible} />
        </div>
    );
};

export default React.memo(DestkopNavbar);
