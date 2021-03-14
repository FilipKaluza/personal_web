import React, { useState } from 'react';

// import components
import Modal from "./mobileLayout/mobileLayout";

import { StyleSheet, css } from 'aphrodite';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';


import Col from "antd/lib/col";
import Row from "antd/lib/row";

const MobileNavbar = (props) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openOrClose = () =>setModalOpen(!modalOpen)

    const styles = StyleSheet.create({
        MobileNavbar: {
            position: "fixed",
            zIndex: "100",    
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
            padding: "5px"
        },

        LogoNav: {
            color: "#fff",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            margin: "0",
            height: "40px",
            padding: "0 0 0 10px",
            fontFamily: "Courier"
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

    const Name = "< KD />"




    return (
        <Row id="MobileNavbar" className={css(styles.MobileNavbar, props.visible ? styles.MobileNavbarShow : styles.MobileNavbarHide)} >
            <Col xs={20}>
                <p className={css(styles.LogoNav)}> {Name} </p>
            </Col>
            <Col className={css(styles.AntCol)} xs={4} >
                <button className={css(styles.ButtonWrapper)}  onClick={openOrClose}  >
                    {modalOpen ? <CloseOutlined className={css(styles.Button)} /> : <MenuOutlined className={css(styles.Button)} /> }
                </button>
            </Col> 
            <Modal open={modalOpen} clicked={openOrClose}  />
        </Row>
    );
};

export default MobileNavbar;

