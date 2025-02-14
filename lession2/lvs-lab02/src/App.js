import logo from './logo.svg';
import './App.css';
import React from "react";
import LvsCompInfor from "./LvsCompInfor";

function App() {
  const userInfo = {
    hoTen: "Lục Văn Sơn",
    maSV: "2310900087",
    ngaySinh: "13/02/2005",
    dienThoai: "0823760578",
    tenLop: "CNTT3-K23"
  };
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
          <h1>Thông tin cá nhân</h1>
          <LvsCompInfor info={userInfo} />
        </a>
      </header>
    </div>
  );
}

export default App;
