import React from 'react';

// import components
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Technologies from './components/technologies/technologies';
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import ScrollUp from "./components/scrollToTop/scrollToTop";

// import css
import "./App.css"


import { Link  } from "react-scroll";

import { StyleSheet, css } from 'aphrodite';


const App = () => {
  
  const styles = StyleSheet.create({
      ButtonUp: {
          fontSize: "50px",
          position: "fixed",
          bottom: "0",
          right: "0",
          padding: "0 35px 25px 0",
          color: "#CC0000",
          ":hover": {
              color: "#CC0000",
          }
      }
  });

  return (
    <div className="App">
      <Navbar />
      <section id="Main">
        <Main />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Technologies">
        <Technologies /> 
      </section>
      <section id="Contact">
        <Contact /> 
      </section>
      <Link className={css(styles.ButtonUp)} to="Main" spy={false} smooth={true} offset={0} duration={1000} > <ScrollUp />  </Link> 
    </div>

  );
}

export default App;
