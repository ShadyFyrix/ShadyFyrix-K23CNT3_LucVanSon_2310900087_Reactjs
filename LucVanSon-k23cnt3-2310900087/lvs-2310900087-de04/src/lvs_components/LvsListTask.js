import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function LvsListTask() {
  const [LvsListTask, setLvsListTask] = useState([]);
  const LvsApiOnline =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/lvsApi/2310900087/lvsTask";

  useEffect(() => {
    LvsGetTasks();
  }, []);

  const LvsGetTasks = () => {
    axios
      .get(LvsApiOnline)
      .then((response) => setLvsListTask(response.data))
      .catch((error) => console.log("Lỗi:", error));
  };

  const LvsHandleDelete = (lvsTaskId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa task này không?")) {
      axios
        .delete(`${LvsApiOnline}/${lvsTaskId}`)
        .then(() => {
          setLvsListTask((prevTask) =>
            prevTask.filter((task) => task.lvsTaskId !== lvsTaskId)
          );
          alert("Xóa task thành công!");
        })
        .catch((error) => console.log("Lỗi khi xóa:", error));
    }
  };

  const LvsElemenTask = LvsListTask.map((Lvs_Item) => (
    <tr key={Lvs_Item.lvsTaskId} className="animate__animated animate__fadeIn">
      <td>{Lvs_Item.lvsTaskId}</td>
      <td>{Lvs_Item.lvsTaskName}</td>
      <td>
        {Lvs_Item.lvsTaskLevel === 1
          ? "High"
          : Lvs_Item.lvsTaskLevel === 2
          ? "Medium"
          : "Low"}
      </td>
      <td>{Lvs_Item.lvsStartDate}</td>
      <td>
        {Lvs_Item.lvsTaskStatus ? (
          <span className="badge bg-success">Done</span>
        ) : (
          <span className="badge bg-danger">Pending</span>
        )}
      </td>
      <td>
        <Link
          to={`/LvsEditTask/${Lvs_Item.lvsTaskId}`}
          className="btn btn-primary btn-sm mx-1"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button
          onClick={() => LvsHandleDelete(Lvs_Item.lvsTaskId)}
          className="btn btn-danger btn-sm mx-1"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Danh sách Task</h2>
        <Link to="/LvsAdd" className="btn btn-success">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Thêm Task
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Tên Task</th>
              <th>Mức độ</th>
              <th>Ngày bắt đầu</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{LvsElemenTask}</tbody>
        </table>
      </div>
    </div>
  );
}
