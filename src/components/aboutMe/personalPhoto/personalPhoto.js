import PerPhoto from "../../../assets/images/perphotowithoutbg.png";

import Col from 'antd/lib/col';

import { StyleSheet, css } from 'aphrodite';

const PersonalPhoto = () => {

    const styles = StyleSheet.create({
        PhotoCol: {
            width: "50vw",
            height: "50vh",
            margin: "25vh 0 0 0",
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 740px)": {
                margin: "20px 0 0 0",
                padding: "100px",
                width: "300px",
                height: "auto"
            },
        },

        Photo: {
            borderRadius: "50px 0 50px 50px",
            "@media (max-width: 740px)": {
                height: "300px",
                width: "auto",
                padding: "5px"
            }
        },
    });

    return(
        <Col className={css(styles.PhotoCol)} xs={24}  md={12}>
            <img className={css(styles.Photo)} src={PerPhoto}  alt="personalphoto" />
        </Col>
    );
};

export default PersonalPhoto;