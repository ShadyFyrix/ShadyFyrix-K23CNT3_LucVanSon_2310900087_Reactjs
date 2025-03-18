import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

export default function LvsCreateMockAPI() {
  const [lvsFullName, setlvsFullName] = useState("");
  const [lvsAge, setlvsAge] = useState(0);
  const [lvsActive, setlvsActive] = useState(true);

  const lvsCreateUserApi =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users";

  const lvsHandleSubmit = (event) => {
    event.preventDefault();
    let lvsNewUser = { lvsFullName, lvsAge, lvsActive };
    axios.post(lvsCreateUserApi, lvsNewUser).then((lvs_response) => {
      alert("User đã tạo successfully:DDDD!");
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Thêm mới users</h2>
      <hr />
      <form onSubmit={lvsHandleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="lvsFullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="lvsFullName"
            value={lvsFullName}
            onChange={(ev) => setlvsFullName(ev.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lvsAge">Age</label>
          <input
            type="number"
            className="form-control"
            id="lvsAge"
            value={lvsAge}
            onChange={(ev) => setlvsAge(ev.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Active</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="lvsActive_hd"
                name="lvsActive"
                value={true}
                checked={lvsActive === true}
                onChange={(ev) => setlvsActive(ev.target.value === "true")}
              />
              <label className="form-check-label" htmlFor="lvsActive_hd">
                Hoạt động
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="lvsActive_kh"
                name="lvsActive"
                value={false}
                checked={lvsActive === false}
                onChange={(ev) => setlvsActive(ev.target.value === "true")}
              />
              <label className="form-check-label" htmlFor="lvsActive_kh">
                Khóa
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon={faSave} /> Create
        </button>
      </form>
    </div>
  );
}
