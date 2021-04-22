import { memo, Fragment } from 'react';

// import child cmoponents
import NavItems from "../../../navItems/navitems";
import SocSites from "../../../../shared/socSites/socSites"

const MobileItems = (props) => {

    return (
        <Fragment>
            <NavItems />
            <SocSites />
        </Fragment>
    );
};

export default memo(MobileItems);
