import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LvsEditTask() {
  const { lvsTaskId } = useParams();
  const navigate = useNavigate();
  const [lvsTask, setLvsTask] = useState({
    lvsTaskName: "",
    lvsTaskLevel: 2,
    lvsStartDate: "",
    lvsTaskStatus: false,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `https://67d8d4c400348dd3e2a85d27.mockapi.io/lvsApi/2310900087/lvsTask/${lvsTaskId}`
        );
        const taskData = response.data;

        const date = new Date(taskData.lvsStartDate * 1000);
        const formattedDate = date.toISOString().split("T")[0];

        setLvsTask({
          lvsTaskName: taskData.lvsTaskName,
          lvsTaskLevel: taskData.lvsTaskLevel.toString(), // Convert to string for the select
          lvsStartDate: formattedDate,
          lvsTaskStatus: taskData.lvsTaskStatus,
        });
      } catch (error) {
        console.log("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchTask();
  }, [lvsTaskId]);

  const LvsHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLvsTask({
      ...lvsTask,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const LvsHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert back to Unix timestamp and number for task level
      const date = new Date(lvsTask.lvsStartDate);
      const unixTimestamp = Math.floor(date.getTime() / 1000);

      const taskToUpdate = {
        ...lvsTask,
        lvsTaskLevel: parseInt(lvsTask.lvsTaskLevel),
        lvsStartDate: unixTimestamp,
      };

      await axios.put(
        `https://67d8d4c400348dd3e2a85d27.mockapi.io/lvsApi/2310900087/lvsTask/${lvsTaskId}`,
        taskToUpdate
      );

      alert("Cập nhật task thành công!");
      navigate("/LvsListTask");
    } catch (error) {
      console.log("Lỗi khi cập nhật:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Chỉnh sửa Task lvsTaskId: {lvsTaskId}
      </h2>
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

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Cập nhật
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/LvsListTask")}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
