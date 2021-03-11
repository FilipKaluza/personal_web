import React from 'react';


// import ant design components
import { ArrowDownOutlined } from'@ant-design/icons';

// import animations
import { flash } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


const arrowDown = (props) => {


    const styles = StyleSheet.create({
        pulse: {
            animationName: flash,
            animationDuration: '4s',
            animationIterationCount: "infinite"
        },

        sizeOfIcon: {
            fontSize: "50px",
        },

        centerDown: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"
          },
        color: {
            color: "#fff",
            ":hover": {
                color: "#CC0000"
            }
        }
    });

    return (
        <div className={css(styles.pulse, styles.centerDown)}>
            <ArrowDownOutlined className={css(styles.sizeOfIcon, styles.color)}/>
        </div>
    );
};

export default arrowDown;