// LvsControl.js
import React from "react";

const LvsControl = ({ onSearch, onSort, onAdd }) => {
  return (
    <div className="row">
      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary btn-icon-text"
          onClick={onAdd}
        >
          Thêm mới sinh viên
        </button>
      </div>
      <div className="col-6">
        <form className="search-form" onSubmit={onSearch}>
          <i className="icon-search"></i>
          <input
            type="search"
            className="form-control"
            placeholder="Search Here"
            title="Search here"
          />
          <button type="submit" className="btn btn-primary btn-icon-text">
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="col-3 d-flex align-items-center">
        <select className="form-control" onChange={onSort}>
          <option value="">Sắp xếp</option>
          <option value="name">Tên</option>
          <option value="age">Tuổi</option>
        </select>
      </div>
    </div>
  );
};

export default LvsControl;
