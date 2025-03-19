import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import LvsHome from "./LvsHome";
import LvsListUser from "./LvsListUser";
import LvsCreateUser from "./LvsCreateUser";
import LvsEditUser from "./LvsEditUser";

function LvsNavBar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            LvsMockAPI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Trang Chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/DSUsers" className="nav-link">
                  Danh Sách Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/TMUsers" className="nav-link">
                  Thêm Mới Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main
        className="p-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/elegant-dynamic-flowing-wavy-line-blue-background_1017-56415.jpg?t=st=1742398064~exp=1742401664~hmac=ea90c642bcd4b67bb87828d715e3f356b6d2a13f173ed28a5ee4d516b38cce33&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<LvsHome />} />
          <Route path="/DSUsers" element={<LvsListUser />} />
          <Route path="/TMUsers" element={<LvsCreateUser />} />
          <Route path="/EditUser/:id" element={<LvsEditUser />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white text-center p-3 mt-4">
        <p>&copy; GOOD AND JOY.</p>
      </footer>
    </Router>
  );
}

export default LvsNavBar;
