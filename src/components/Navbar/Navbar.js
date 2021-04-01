import React, { useEffect, useState } from 'react';

import {useSelector, useDispatch} from "react-redux";

import { debounce } from "../utils/helpers"; 

//import components
import DestkopNavbar from "./desktopNavbar/desktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import NavItems from "./navItems/navitems";


const Navbar = (props) => {
/*     const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false); */

    const [prevScrollPos , setPrevScrollPos] = useState(0)
    const visible = useSelector( state => state.visibleNavReducer.visible )

    const dispatch = useDispatch();

    console.log("Navbar renedring")

    const handleScroll = debounce(() => {
        const currentPos = window.pageYOffset;
        const visible = (prevScrollPos > currentPos && prevScrollPos - currentPos > 70) && currentPos > 0 || (prevScrollPos < currentPos && prevScrollPos + currentPos > 70)
        dispatch( {type: "NAVVISIBLE", visible: visible} ) 
        setPrevScrollPos(currentPos)
    }, 500)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); 
    
    }, [prevScrollPos, handleScroll, visible]);


    let Navbar =   <React.Fragment > <DestkopNavbar visible={visible} >  <NavItems/>  </DestkopNavbar> </React.Fragment>

    if (window.innerWidth < 741) {
        Navbar =  <React.Fragment >  <MobileNavbar visible={visible} />  </React.Fragment>
    } // it which help us show corrent navbar

    return(
        <header id="Navbar" >
            {Navbar}
        </header>
    );

};

export default React.memo(Navbar);

