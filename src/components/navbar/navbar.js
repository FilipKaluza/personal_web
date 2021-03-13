import React from 'react';

//import components
import DestkopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./NavItems/NavItems";

import { StyleSheet, css } from 'aphrodite';

const Navbar = (props) => {

    const styles=StyleSheet.create({
        DestkopOnly: {
            "@media (max-width: 600px)": {
                display: "none"
            }
        },

        MobileOnly: {
            "@media (min-width: 601px)": {
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

