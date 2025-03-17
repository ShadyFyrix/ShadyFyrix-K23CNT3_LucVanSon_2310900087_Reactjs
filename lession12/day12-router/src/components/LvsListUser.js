import React, { useState } from "react";
import LvsFormUser from "./LvsFormUser";

export default function LvsListUser({
  renderLvsUser,
  onAdd,
  onEdit,
  onDelete,
}) {
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const LvsHandleAdd = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const LvsLvsHandleEdit = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const LvsHandleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      onDelete(id);
    }
  };

  const LvsHandleFormSubmit = (userData) => {
    if (selectedUser) {
      onEdit(userData);
    } else {
      onAdd(userData);
    }
    setShowForm(false);
  };

  const LvsHandleCancel = () => {
    setShowForm(false);
  };

  const LvsElementUser = renderLvsUser.map((lvsuser, index) => {
    return (
      <tr key={index} className="fade-in">
        <td>{index + 1}</td>
        <td>{lvsuser.id}</td>
        <td>{lvsuser.lvsfullname}</td>
        <td>{lvsuser.lvsusername}</td>
        <td>{lvsuser.lvspassword}</td>
        <td>
          <button
            className="btn btn-warning btn-sm mx-3"
            onClick={() => LvsLvsHandleEdit(lvsuser)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => LvsHandleDelete(lvsuser.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="card-body fade-in">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <button className="btn btn-success mb-3" onClick={LvsHandleAdd}>
        Thêm mới User
      </button>
      {showForm && (
        <LvsFormUser
          user={selectedUser}
          onSubmit={LvsHandleFormSubmit}
          onCancel={LvsHandleCancel}
        />
      )}
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{LvsElementUser}</tbody>
        </table>
      </div>
    </div>
  );
}
