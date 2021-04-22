import { memo } from 'react';

import { Link } from "react-scroll";

import { UpCircleOutlined } from '@ant-design/icons';

import { StyleSheet, css } from 'aphrodite';

const scrollUp = (props) => {

    const styles=StyleSheet.create({
        ButtonUp: {
            fontSize: "50px",
            position: "fixed",
            bottom: "0",
            left: "0",
            padding: "0 0 25px 35px",
            color: "#cc0000",
            transition: "bottom 0.6s",
        },

        ButtonUpShow: {
            bottom: "0",
            transition: "bottom 0.6s",
        },

        ButtonUpHide: {
            bottom: "-100px",
            transition: "bottom 0.6s",
        },
    });

    return (
        <Link className={css(styles.ButtonUp, props.visible ? styles.ButtonUpShow : styles.ButtonUpHide)} to="Home" spy={false} smooth={true} offset={0} duration={1000} >
            <UpCircleOutlined />     
        </Link>  
    );
};
export default memo(scrollUp);
