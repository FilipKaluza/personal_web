import React, { useState } from 'react';

// import components
import Modal from "./mobileLayout/mobileLayout";

import { StyleSheet, css } from 'aphrodite';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import { Link } from "react-scroll";

import MobileNavLogo from "../../../assets/images/logoRed.svg";

import Col from "antd/lib/col";
import Row from "antd/lib/row";

const MobileNavbar = (props) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openOrClose = () =>setModalOpen(!modalOpen)

    const styles = StyleSheet.create({
        MobileNavbar: {
            width: "100vw",
            zIndex: "50",
            position: "fixed",
            backgroundColor: "#000"
        },

        ButtonWrapper: {
            border: "none",
            padding: "0",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#000"
        },

        Button: {
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "30px",
            padding: "5px 10px 5px 5px"
        },

        MobileNavbarShow: {
            top: "0",
            transition: "top 0.6s",

        },
        MobileNavbarHide: {
            top: "-60px",
            transition: "top 0.6s",
        },

        MobileNavLogoWrapper: {
            height: "40px",
        },

        MobileNavLogo: {
            height: "16px",
            margin: "12px 0",
            padding: "0 0 0 20px"
        }
    });

    return (
        <Row className={css(styles.MobileNavbar, props.visible ? styles.MobileNavbarShow : styles.MobileNavbarHide)} >
                <Col xs={20} className="MobileNavLogoWrapper" >
                    <Link to="Main" smooth={true} offset={0} duration={1000} >
                        <img src={MobileNavLogo} alt="MobileNavL" className={css(styles.MobileNavLogo)} />
                    </Link>
                </Col>
            <Col className={css(styles.AntCol)} xs={4} >
                <button className={css(styles.ButtonWrapper)}  onClick={openOrClose}  >
                    {modalOpen ? <CloseOutlined className={css(styles.Button)} /> : <MenuOutlined className={css(styles.Button)} /> }
                </button>
            </Col> 
            <Modal open={modalOpen} first={props.first} second={props.second} clicked={openOrClose}  />
        </Row>
    );
};

export default MobileNavbar;

