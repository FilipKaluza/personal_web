import React from 'react';

import Row from 'antd/lib/row';

import "./logo.css";

const logo = (props) => {
    const first = "<Kaluza."
    const second = "DEV />"

    let classes = {
        Kaluza: [],
        DEV: [],
        Logo: ["Logo"]
    }

    if (props.MainLogo) {
        classes.Kaluza.push("KaluzaMain")
        classes.DEV.push("DEVMain")
    } else if (props.DesktopNav) {
        classes.Kaluza.push("KaluzaDesktopNav")
        classes.DEV.push("DEVDesktopNav")
    } else if (props.MobileNav) {
        classes.Kaluza.push("KaluzaMobileNav")
        classes.DEV.push("DEVMobileNav")
        classes.Logo.splice(0, 1, "MobileLogo") //remove 1 element at index 0 and replace him with MobileLogo
    } else {
        classes.Kaluza.push("KaluzaFooter")
        classes.DEV.push("DEVFooter")
    }

    return (
        <Row className={classes.Logo.join(" ")} >
            <p className={classes.Kaluza.join(" ")} > {first} </p><p className={classes.DEV.join(" ")}> {second} </p>
        </Row>

    )
}

export default logo;