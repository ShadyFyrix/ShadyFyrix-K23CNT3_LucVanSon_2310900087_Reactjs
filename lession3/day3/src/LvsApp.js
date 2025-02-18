import './App.css';
import LvsJsxExpression from './components/LvsJsxExpression';
import LvsFuncComp from './components/LvsFuncComp';
import LvsClassComp from './components/LvsClassComp';

function LvsApp() {
  return (
    <div className="App">
      <div className="container border border-primary bg-light p-5">
        <div className="spinning-container">
          <img
            src={`${process.env.PUBLIC_URL}/image/chill.jpg`}
            alt="Spinning Image"
            className="spinning-image"
          />
        </div>
        <h1 className="text-center mb-4 custom-heading">
          <i className="fas fa-book me-2 custom-icon"></i>
          React JS Lessons 3 - Lục Văn Sơn
        </h1>
        <hr />
        <LvsJsxExpression />
        <hr />
        <LvsFuncComp />
        <hr />
        <LvsClassComp />
      </div>
    </div>
  );
}

export default LvsApp;
