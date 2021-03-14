import React from 'react';

// animation
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

// import components from ant design
import Row from "antd/lib/row";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from'@ant-design/icons';



const socSites = (props) => {

  console.log("rendering SOCSITESs")
    
    const styles = StyleSheet.create({
        fadeIn: {
          animationName: fadeIn, 
          animationDuration: '2s',
        },

        center: {
          display: "flex",
          justifyContent: "center",
        },

        sizeOfIcon: {
          fontSize: "40px",
          margin: "20px",
        },

        IconColor: {
          color: "#fff",
          ":hover": {
            color: "#CC0000"
          }
        },

      })
    
    return (
        <Row className={css(styles.bounce, styles.center, styles.fadeIn)} >
            <a className={css(styles.sizeOfIcon, styles.IconColor)} href="https://www.facebook.com/filip.kaluza.9/" ><FacebookOutlined /> </a>
            <a className={css(styles.sizeOfIcon, styles.IconColor)} href="https://www.instagram.com/filipkaluza/" > <InstagramOutlined /> </a>
            <a className={css(styles.sizeOfIcon, styles.IconColor)} href="https://www.linkedin.com/in/filip-kalu%C5%BEa-9a87b81b7/" > <LinkedinOutlined /> </a>
        </Row>
    );
};

export default React.memo(socSites)

