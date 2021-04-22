import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Technologies from './components/technologies/technologies';
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Messenger from "./components/messenger/messenger";

// import css
import "./App.css"

const App = () => {
  

  return (
    <div className="App">
      <Navbar />
      <Messenger />
      <section id="Home">
        <Main />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Technologies">
        <Technologies /> 
      </section>
      <footer id="Contact">
        <Contact /> 
      </footer>
    </div>
  );
}



export default App;
