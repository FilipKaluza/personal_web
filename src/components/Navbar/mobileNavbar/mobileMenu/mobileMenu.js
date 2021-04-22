import { memo } from 'react';

import NavItems from "./mobileIItems/mobileItems";

import { StyleSheet, css } from 'aphrodite';

const MobileNavMenu = (props) => {

    const styles = StyleSheet.create({
        Menu: {
            width: "100vw",
            margin: "55px 0 0 0",
            height: "100vh"
        },
        ModalHidden: {
            display: "none"
        }
    })

    return (
        <div className={props.menuOpen ? css(styles.Menu) : css(styles.ModalHidden)} >
            <NavItems/>
        </div>
    );
};

export default memo(MobileNavMenu);
