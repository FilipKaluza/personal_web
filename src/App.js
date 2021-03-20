import React from 'react';

// import components
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Technologies from './components/technologies/technologies';
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";

// import messengerChat
import MessengerCustomerChat from 'react-messenger-customer-chat';


// import css
import "./App.css"

const App = () => {
  

  return (
    <div className="App">
      <Navbar />
      <MessengerCustomerChat
        pageId="101735315337796"
        appId="798827840988723"
        />
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
        <Footer /> 
      </footer>
      
    </div>

  );
}

export default App;
