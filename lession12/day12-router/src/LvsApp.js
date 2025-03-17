import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LvsHome from "./components/LvsHome";
import LvsGioiThieu from "./components/LvsGioiThieu";
import LvsSanPham from "./components/LvsSanPham";
import LvsTinTuc from "./components/LvsTinTuc";
import LvsLienHe from "./components/LvsLienHe";
import LvsListUser from "./components/LvsListUser";
import "./styles.css";

function LvsApp() {
  const ListUsers = [
    {
      id: 1,
      lvsfullname: "Lục Văn Sơn",
      lvsusername: "Shadyfyrix",
      lvspassword: "123456",
    },
    {
      id: 2,
      lvsfullname: "Nguyễn Văn A",
      lvsusername: "NguyenVanA",
      lvspassword: "123456",
    },
    {
      id: 3,
      lvsfullname: "Trần Thị B",
      lvsusername: "TranThiB",
      lvspassword: "123456",
    },
  ];

  const [LvsUser, setLvsUser] = useState(ListUsers);

  const LvsHandleAddUser = (newUser) => {
    newUser.id = LvsUser.length + 1; // Generate a new ID
    setLvsUser([...LvsUser, newUser]);
  };

  const LvsHandleEditUser = (updatedUser) => {
    const updatedUsers = LvsUser.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setLvsUser(updatedUsers);
  };

  const LvsHandleDeleteUser = (id) => {
    const filteredUsers = LvsUser.filter((user) => user.id !== id);
    setLvsUser(filteredUsers);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-home me-2"></i>Trang Chủ
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/gioi-thieu">
                    <i className="fas fa-info-circle me-1"></i>Giới Thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/san-pham">
                    <i className="fas fa-box me-1"></i>Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tin-tuc">
                    <i className="fas fa-newspaper me-1"></i>Tin Tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lien-he">
                    <i className="fas fa-address-book me-1"></i>Liên Hệ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/list-user">
                    <i className="fas fa-users me-1"></i>Danh Sách User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mt-4 content-container">
          <Routes>
            <Route path="/" element={<LvsHome />} />
            <Route path="/gioi-thieu" element={<LvsGioiThieu />} />
            <Route path="/san-pham" element={<LvsSanPham />} />
            <Route path="/tin-tuc" element={<LvsTinTuc />} />
            <Route path="/lien-he" element={<LvsLienHe />} />
            <Route
              path="/list-user"
              element={
                <LvsListUser
                  renderLvsUser={LvsUser}
                  onAdd={LvsHandleAddUser}
                  onEdit={LvsHandleEditUser}
                  onDelete={LvsHandleDeleteUser}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LvsApp;
