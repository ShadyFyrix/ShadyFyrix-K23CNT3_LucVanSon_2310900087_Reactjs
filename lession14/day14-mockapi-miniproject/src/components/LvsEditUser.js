import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LvsEditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lvsUser, setLvsUser] = useState({
    lvsFullName: "",
    lvsAge: 0,
    lvsEmail: "",
    lvsPhone: "",
    lvsActive: false,
  });

  useEffect(() => {
    axios
      .get(
        `https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users/${id}`
      )
      .then((response) => {
        setLvsUser(response.data);
      })
      .catch((error) => {
        console.log("Lỗi khi tải dữ liệu:", error);
      });
  }, [id]);

  const LvsHandleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLvsUser({
      ...lvsUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const LvsHandleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users/${id}`,
        lvsUser
      )
      .then(() => {
        alert("Cập nhật thành công!");
        navigate("/DSUsers");
      })
      .catch((error) => {
        console.log("Lỗi khi cập nhật:", error);
      });
  };

  return (
    <div
      className="container mt-4"
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
      <h2 className="text-center mb-4">Chỉnh sửa User ID: {id}</h2>
      <form
        onSubmit={LvsHandleSubmit}
        className="animate__animated animate__fadeIn"
      >
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            name="lvsFullName"
            value={lvsUser.lvsFullName}
            onChange={LvsHandleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="lvsAge"
            value={lvsUser.lvsAge}
            onChange={LvsHandleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="lvsEmail"
            value={lvsUser.lvsEmail}
            onChange={LvsHandleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="number"
            className="form-control"
            name="lvsPhone"
            value={lvsUser.lvsPhone}
            onChange={LvsHandleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Active:</label>
          <select
            className="form-control"
            name="lvsActive"
            value={lvsUser.lvsActive}
            onChange={LvsHandleInputChange}
          >
            <option value={true}>Hoạt động</option>
            <option value={false}>Khóa</option>
          </select>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Cập nhật
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/DSUsers")}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
