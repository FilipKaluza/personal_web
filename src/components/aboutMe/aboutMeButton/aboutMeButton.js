import Col from 'antd/lib/col';
import Button  from 'antd/lib/button';

import { StyleSheet, css } from 'aphrodite';
import { Link } from "react-scroll";

const TechButton = () => {
    
    const styles = StyleSheet.create({

        TechButton: {
            display: "flex",
            justifyContent: "left",
            margin: "0 0 0 35px",
            "@media (max-width: 740px)": {
                margin: "0",
                justifyContent: "center"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                margin: "10vh auto",
                justifyContent: "center"
            }
        },

        Button: {
            width: "500px",
            height: "80px",
            fontSize: "30px",
            ":hover": {
                backgroundColor: "#CC0000",
                color: "#fff",
                border: "none"
            },
            "@media (max-width: 740px)": {
                width: "300px",
                margin: "35px 35px",
                fontSize: "20px",
                height: "50px"
            }
        }
    });

    return(
        <Col className={css(styles.TechButton)} xs={24} md={12}  >
            <Link activeClass="active" to="Technologies" spy={false} smooth={false} offset={0} > <Button className={css(styles.Button)}> See my technologies </Button></Link>
        </Col>
    );
};

export default TechButton;
