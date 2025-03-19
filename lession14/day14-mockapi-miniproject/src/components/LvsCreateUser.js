import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

export default function LvsCreateUser() {
  const [lvsFullName, setlvsFullName] = useState("");
  const [lvsAge, setlvsAge] = useState(0);
  const [lvsEmail, setlvsEmail] = useState("");
  const [lvsPhone, setlvsPhone] = useState("");
  const [lvsActive, setlvsActive] = useState(true);

  const lvsCreateUserApi =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users";

  const lvsHandleSubmit = (event) => {
    event.preventDefault();
    let lvsNewUser = { lvsFullName, lvsAge, lvsEmail, lvsPhone, lvsActive };
    axios.post(lvsCreateUserApi, lvsNewUser).then((lvs_response) => {
      alert("User đã tạo successfully!");
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Thêm mới users</h2>
      <form
        onSubmit={lvsHandleSubmit}
        className="animate__animated animate__fadeIn"
      >
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={lvsFullName}
            onChange={(ev) => setlvsFullName(ev.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={lvsAge}
            onChange={(ev) => setlvsAge(ev.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={lvsEmail}
            onChange={(ev) => setlvsEmail(ev.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={lvsPhone}
            onChange={(ev) => setlvsPhone(ev.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Active</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="lvsActive"
                value={true}
                checked={lvsActive === true}
                onChange={(ev) => setlvsActive(ev.target.value === "true")}
              />
              <label className="form-check-label">Hoạt động</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="lvsActive"
                value={false}
                checked={lvsActive === false}
                onChange={(ev) => setlvsActive(ev.target.value === "true")}
              />
              <label className="form-check-label">Khóa</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary animate__animated animate__pulse animate__infinite"
        >
          <FontAwesomeIcon icon={faSave} className="me-2" />
          Create
        </button>
      </form>
    </div>
  );
}
