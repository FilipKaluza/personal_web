import { memo, Fragment } from 'react';

// import effects for emailResponse
import { fadeIn, fadeOut } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const EmailResponse = (props) => {

    const stylesForEmailResponse = StyleSheet.create({

        basicStyle: {
            fontSize: "30px",
            color: "#000",
            textAlign: "center",
            height: "50px",
            margin: "0",
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 600px)": {
                height: "50px",
                fontSize: "20px",
                color: "000"
            }
        },

        fadeIn: {
            animationName: fadeIn,
            animationDuration: '1s',
        },
        fadeOut: {
            animationDelay: "10s",
            animationName: fadeOut,
            animationDuration: '1s'
        }
      })

    let emailRes = <p className={css(stylesForEmailResponse.basicStyle)}> </p>
    if (props.emailSuccess) {
        emailRes = <p className={css(stylesForEmailResponse.basicStyle, stylesForEmailResponse.fadeIn, stylesForEmailResponse.fadeOut)}> {props.emailSuccess} </p> 
    } 

    return (
        <Fragment>
            {emailRes}
        </Fragment>
    );
};

export default memo(EmailResponse);
