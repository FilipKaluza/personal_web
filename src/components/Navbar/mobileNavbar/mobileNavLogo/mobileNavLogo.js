import { memo } from 'react';

import { Link } from "react-scroll";

import MobileNavbarLogo from "../../../../assets/images/logoRed.svg";

import { StyleSheet, css } from 'aphrodite';
import Col from "antd/lib/col";


const MobileNavLogo = (props) => {

    const styles = StyleSheet.create({
        MobileNavLogoWrapper: {
            height: "40px",
        },

        MobileNavLogo: {
            height: "16px",
            margin: "12px 0",
            padding: "0 0 0 20px"
        }
    });

    return(
        <Col xs={20} className="MobileNavLogoWrapper" >
            <Link to="Main" smooth={true} offset={0} duration={1000} >
                <img src={MobileNavbarLogo} alt="MobileNavL" className={css(styles.MobileNavLogo)} />
            </Link>
        </Col>
    );
};

export default memo(MobileNavLogo);
