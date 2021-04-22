import Typical from 'react-typical';

import Col from 'antd/lib/col';

import { StyleSheet, css } from 'aphrodite';

const AboutMeText = (props) => {

    const styles = StyleSheet.create({
        PersonalText: {
            width: "50vw",
            height: "20vh",
            display: "flex",
            margin: "40vh 0 0 0",
            "@media (max-width: 740px)": {
                margin: "0",
                height: "200px"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                margin: "25vh 0 0 0",
                height: "50vh",
                padding: "25vh 0 0 0"
            }

        },
        PersonalFont: {
            fontSize: "40px",
            padding: "0 0 0 35px",
            color: "#fff",
            "@media (max-width: 740px)": {
                fontSize: "22px",
                padding: "80px 35px 0 35px"
            },
            "@media (min-width: 741px) and (max-width: 1200px)": {
                fontSize: "30px",
            }
        },
    });

    const mainText = "Hi, I'm Filip Kaluža and I'm web developer. ";

    return (
      <Col className={css(styles.PersonalText)} xs={24} md={12}>
          <h1 className={css(styles.PersonalFont)}>
              <Typical
                steps={[
                    mainText + "I work patiently and consistently.", 6000,
                    mainText + "I am constantly learning new technologies.", 6000,
                    mainText + "Click on the button below to see the technologies I'm working with. ", 6000
                ]}
                loop={Infinity}
              />
          </h1>
      </Col>
    )
}

export default AboutMeText;