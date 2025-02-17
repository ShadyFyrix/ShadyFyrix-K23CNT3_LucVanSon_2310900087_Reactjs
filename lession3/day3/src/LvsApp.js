
import './App.css';
import LvsJsxExpression from './components/LvsJsxExpression';
import LvsFuncComp from './components/LvsFuncComp';
import LvsClassComp from './components/LvsClassComp';

function LvsApp() {
  return (
    <div className="App">
      <div className="container border border-primary bg-light p-5">
        <h1 className="text-center mb-4 custom-heading">
          <i className="fas fa-book me-2 custom-icon"></i>React JS Lessons 3 - Lục Văn Sơn
        </h1>
        <hr/>
        <LvsJsxExpression />
        <hr />
        {/* Use Function Components */}
        <LvsFuncComp />
        <hr />
        {/* Use Class Components */}
        <LvsClassComp />
      </div>
    </div>
  );
}

export default LvsApp;
