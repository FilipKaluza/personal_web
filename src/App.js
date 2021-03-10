import React from 'react';

// import components
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Technologies from './components/technologies/technologies';
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";

// import css
import "./App.css"


const App = () => {
  

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
    </div>

  );
}

export default App;
