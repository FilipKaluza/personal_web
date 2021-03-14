import React from 'react';

// import components
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Technologies from './components/technologies/technologies';
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/Navbar";

// import messengerChat
import MessengerCustomerChat from 'react-messenger-customer-chat';


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
      <footer id="Footer">
        <Contact /> 
      </footer>
      <MessengerCustomerChat
      attribution="install_email"
      page_id="101735315337796"
      theme_color="#cc0000"
      logged_in_greeting="Hi, if you have any questions please let me know"
      logged_out_greeting="Hi, if you have any questions please let me know"
      />
    </div>

  );
}

export default App;
