import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function LvsReadMockAPI() {
  const [lvsListUser, setlvsListUser] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const lvsApiOnline =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users";

  useEffect(() => {
    axios
      .get(lvsApiOnline)
      .then((lvs_response) => {
        setlvsListUser(lvs_response.data);
      })
      .catch((error) => {
        console.log("Lỗi phát sinh");
      });
  }, []);

  const LvsHandleDelete = (id) => {
    axios
      .delete(`${lvsApiOnline}/${id}`)
      .then(() => {
        alert("User đã bị xoá successfully:(!");
        setlvsListUser(lvsListUser.filter((user) => user.lvsId !== id));
      })
      .catch((error) => {
        console.log("Error khi xoá user:", error);
      });
  };

  const LvsHandleEdit = (user) => {
    setEditingUser({ ...user });
  };

  const LvsHandleCancelEdit = () => {
    setEditingUser(null);
  };

  const LvsHandleSaveEdit = () => {
    axios
      .put(`${lvsApiOnline}/${editingUser.lvsId}`, editingUser)
      .then(() => {
        alert("User updated successfully:DD!");
        setlvsListUser(
          lvsListUser.map((user) =>
            user.lvsId === editingUser.lvsId ? editingUser : user
          )
        );
        setEditingUser(null);
      })
      .catch((error) => {
        console.log("Error updating user:", error);
      });
  };

  const LvsHandleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: name === "lvsActive" ? value === "true" : value,
    });
  };

  const lvsElementUser = lvsListUser.map((lvs_item, index) => {
    if (editingUser && editingUser.lvsId === lvs_item.lvsId) {
      return (
        <tr key={lvs_item.lvsId}>
          <td>{lvs_item.lvsId}</td>
          <td>
            <input
              type="text"
              className="form-control"
              name="lvsFullName"
              value={editingUser.lvsFullName}
              onChange={LvsHandleInputChange}
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              name="lvsAge"
              value={editingUser.lvsAge}
              onChange={LvsHandleInputChange}
            />
          </td>
          <td>
            <select
              className="form-control"
              name="lvsActive"
              value={editingUser.lvsActive}
              onChange={LvsHandleInputChange}
            >
              <option value={true}>Hoạt động</option>
              <option value={false}>Khóa</option>
            </select>
          </td>
          <td>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={LvsHandleSaveEdit}
            >
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={LvsHandleCancelEdit}
            >
              <FontAwesomeIcon icon={faTimes} /> Cancel
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={lvs_item.lvsId}>
          <td>{lvs_item.lvsId}</td>
          <td>{lvs_item.lvsFullName}</td>
          <td>{lvs_item.lvsAge}</td>
          <td>{lvs_item.lvsActive ? "Hoạt động" : "Khóa"}</td>
          <td>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => LvsHandleEdit(lvs_item)}
            >
              <FontAwesomeIcon icon={faEdit} /> Sửa
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => LvsHandleDelete(lvs_item.lvsId)}
            >
              <FontAwesomeIcon icon={faTrash} /> Xóa
            </button>
          </td>
        </tr>
      );
    }
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center">Danh sách</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>FullName</th>
            <th>Age</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{lvsElementUser}</tbody>
      </table>
    </div>
  );
}
