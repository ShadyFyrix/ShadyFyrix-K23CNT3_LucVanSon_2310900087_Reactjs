import React, { useState } from "react";

export default function LvsFormUser({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    user || {
      id: "",
      lvsfullname: "",
      lvsusername: "",
      lvspassword: "",
    }
  );

  const LvsHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const LvsHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card-body">
      <h3 className="card-title">{user ? "Edit User" : "Thêm mới User"}</h3>
      <form onSubmit={LvsHandleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="lvsfullname"
            value={formData.lvsfullname}
            onChange={LvsHandleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="lvsusername"
            value={formData.lvsusername}
            onChange={LvsHandleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="lvspassword"
            value={formData.lvspassword}
            onChange={LvsHandleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {user ? "Update" : "Add"}
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={onCancel}
        >
          Huỷ
        </button>
      </form>
    </div>
  );
}
