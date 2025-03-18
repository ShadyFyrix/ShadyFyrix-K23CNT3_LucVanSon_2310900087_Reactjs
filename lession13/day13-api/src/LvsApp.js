import "./App.css";
import LvsCreateMockAPI from "./components/LvsCreateMockApi";
import LvsReadApiLocal from "./components/LvsReadApiLocal";
import LvsReadMockApi from "./components/LvsReadMockApi";

function LvsApp() {
  return (
    <div className="App">
      <div className="fade-in">
        <h1 className="text-center mt-3">ReactJS - API - Lục Văn Sơn</h1>
      </div>
      <hr />
      <LvsReadApiLocal />
      <hr />
      <LvsReadMockApi />
      <LvsCreateMockAPI />
    </div>
  );
}

export default LvsApp;
