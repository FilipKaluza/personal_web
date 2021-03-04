import React from 'react';

// import components
import Main from "./components/main/main";
import Technologies from './components/technologies/technologies';
import Footer from "./components/footer/footer";
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
        <Technologies /> 
      </section>
      <section id="Footer">
        <Footer /> 
      </section>

    </div>

  );
}

export default App;
