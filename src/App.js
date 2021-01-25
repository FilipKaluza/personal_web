import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// import components
import Technologies from "./components/technologies/technologies";
import Main from "./components/main/main";

const App = () => {
  return (
    <div className="App">
      <header className="App-header row ">
        <Main />
        <Technologies />
      </header>
    </div>
  );
}

export default App;
