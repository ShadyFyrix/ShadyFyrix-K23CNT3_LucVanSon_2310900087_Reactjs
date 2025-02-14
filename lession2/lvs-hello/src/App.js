import React from 'react';
import logo from './logo.svg';
import './App.css';
import LvsCompA from './LvsCompA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        {/* Thêm LvsCompA và truyền props */}
        <LvsCompA lvsName="Lục Văn Sơn" lvsAddress="Thanh Hóa" />
      </header>
    </div>
  );
}

export default App;

