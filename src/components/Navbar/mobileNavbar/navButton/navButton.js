import { memo } from 'react';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { StyleSheet, css } from 'aphrodite';
import Col from "antd/lib/col";

import { useDispatch } from "react-redux";


const NavButton = (props) => {
    
    const dispatch = useDispatch();

    const styles = StyleSheet.create({
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
        }
    });

    return(
        <Col xs={4} >
            <button className={css(styles.ButtonWrapper)} onClick={() => dispatch({type: "NAVCLICKED"}) }  >
                {props.menuOpen ? <CloseOutlined className={css(styles.Button)} /> : <MenuOutlined className={css(styles.Button)} /> }
            </button>
        </Col>
    );
};

export default memo(NavButton);
