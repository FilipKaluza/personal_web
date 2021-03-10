import React, { useState} from 'react';

//import components
import DestkopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/mobileNavbar";
import NavItems from "./NavItems/NavItems";

import { StyleSheet, css } from 'aphrodite';

const Navbar = (props) => {

    const styles=StyleSheet.create({
        DestkopOnly: {
            "@media (max-width: 500px)": {
                display: "none"
            }
        },

        MobileOnly: {
            "@media (min-width: 501px)": {
                display: "none"
            }
        }
    })

    return(
        <header id="Navbar" >
            <div className={css(styles.DestkopOnly)}>
                <DestkopNavbar >
                    <NavItems />
                </DestkopNavbar>
            </div>
            <div className={css(styles.MobileOnly)} >
                <MobileNavbar />
            </div>
        </header>
        

    );

};

export default Navbar;

