import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import LvsHome from "./LvsHome";
import LvsListTask from "./LvsListTask";
import LvsFormTaskAdd from "./LvsFormTaskAdd";
import LvsFormTaskEdit from "./LvsFormTaskEdit";

function LvsNavBar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            LvsTask
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LvsListTask" className="nav-link">
                  Lvs-Task
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LvsAdd" className="nav-link">
                  Lvs-Task-Add
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
          <Route path="/LvsListTask" element={<LvsListTask />} />
          <Route path="/LvsAdd" element={<LvsFormTaskAdd />} />
          <Route path="/LvsEditTask/:lvsTaskId" element={<LvsFormTaskEdit />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white text-center p-3 mt-4">
        <p>&copy; GOOD AND JOY.</p>
      </footer>
    </Router>
  );
}

export default LvsNavBar;
