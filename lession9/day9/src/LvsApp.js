import logo from "./logo.svg";
import "./App.css";
import LvsUserState from "./components/LvsUserState";
import LvsUseEffect1 from "./components/LvsUseEffect1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LvsUserState />
        <LvsUseEffect1 />
      </header>
    </div>
  );
}

export default App;
