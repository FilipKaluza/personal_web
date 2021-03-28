import React from 'react';

// import child cmoponents
import NavItems from "../../../navItems/navitems";
import SocSites from "../../../../shared/socSites/socSites"

const MobileItems = (props) => {

    return(
        <React.Fragment>
            <NavItems />
            <SocSites />
        </React.Fragment>
    );
};

export default React.memo(MobileItems);
