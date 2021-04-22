import { memo, Fragment, useEffect, useState } from 'react';

import {useSelector, useDispatch} from "react-redux";

import { debounce } from "../utils/helpers"; 

//import components
import DestkopNavbar from "./desktopNavbar/desktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./navItems/navitems";


const Navbar = (props) => {

    const [prevScrollPos , setPrevScrollPos] = useState(0)
    const visible = useSelector( state => state.visibleNavReducer.visible )

    const dispatch = useDispatch();

    const handleScroll = debounce(() => {
        const currentPos = window.pageYOffset;
        const visible = (prevScrollPos > currentPos && prevScrollPos - currentPos > 70) && currentPos > 0 || (prevScrollPos < currentPos && prevScrollPos + currentPos > 70)
        // logic above mans, navbar is on default hide and show when you scroll down or scroll up more than 70px
        dispatch( {type: "NAVVISIBLE", visible: visible} ) 
        setPrevScrollPos(currentPos)
    }, 500)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); 
    
    }, [prevScrollPos, handleScroll, visible]);


    let Navbar =   <Fragment > <DestkopNavbar visible={visible} >  <NavItems/>  </DestkopNavbar> </Fragment>

    if (window.innerWidth < 741) {
        Navbar =  <Fragment >  <MobileNavbar visible={visible} />  </Fragment>
    } // simply if which show us the right navbar

    return(
        <header id="Navbar" >
            {Navbar}
        </header>
    );

};

export default memo(Navbar);

