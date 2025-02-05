import { memo } from 'react';

import { StyleSheet, css } from 'aphrodite';
import { Link } from "react-scroll";

import LogoDesktopNav from "../../../../assets/images/logoRed.svg";

const DesktopNavLogo = () => {

    const styles = StyleSheet.create({
        DesktopNavLogo: {
            height: "26px",
            padding: "0 0 0 20px"
        }
    });

    return(
        <Link to="Home" smooth={true} offset={0} duration={1500} >
            <img src={LogoDesktopNav} className={css(styles.DesktopNavLogo)}  alt=""  />
        </Link>
    );
};

export default memo(DesktopNavLogo);
