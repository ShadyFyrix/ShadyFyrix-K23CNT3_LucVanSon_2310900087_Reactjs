import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

export default function LvsCreateTask() {
  const navigate = useNavigate();
  const [lvsTask, setLvsTask] = useState({
    lvsTaskName: "",
    lvsTaskLevel: "2",
    lvsStartDate: new Date().toISOString().split("T")[0],
    lvsTaskStatus: false,
  });

  const LvsApiOnline =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/lvsApi/2310900087/lvsTask";

  const LvsHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLvsTask({
      ...lvsTask,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const LvsHandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(LvsApiOnline, lvsTask)
      .then(() => {
        alert("Tạo task thành công!");
        navigate("/LvsListTask");
      })
      .catch((error) => {
        console.log("Lỗi khi tạo task:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Thêm mới Task</h2>
      <form onSubmit={LvsHandleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tên Task</label>
          <input
            type="text"
            className="form-control"
            name="lvsTaskName"
            value={lvsTask.lvsTaskName}
            onChange={LvsHandleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mức độ</label>
          <select
            className="form-control"
            name="lvsTaskLevel"
            value={lvsTask.lvsTaskLevel}
            onChange={LvsHandleChange}
          >
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Ngày bắt đầu</label>
          <input
            type="date"
            className="form-control"
            name="lvsStartDate"
            value={lvsTask.lvsStartDate}
            onChange={LvsHandleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Trạng thái</label>
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              name="lvsTaskStatus"
              id="lvsTaskStatus"
              checked={lvsTask.lvsTaskStatus}
              onChange={LvsHandleChange}
            />
            <label className="form-check-label" htmlFor="lvsTaskStatus">
              {lvsTask.lvsTaskStatus ? "Done" : "Pending"}
            </label>
          </div>
          {lvsTask.lvsTaskStatus ? (
            <span className="badge bg-success ms-2">Done</span>
          ) : (
            <span className="badge bg-danger ms-2">Pending</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon={faSave} className="me-2" />
          Lưu
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => navigate("/LvsListTask")}
        >
          Hủy
        </button>
      </form>
    </div>
  );
}
