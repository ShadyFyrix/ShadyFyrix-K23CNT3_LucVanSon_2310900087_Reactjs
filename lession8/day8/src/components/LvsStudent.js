import React, { Component } from "react";

class LvsStudent extends Component {
  constructor(props) {
    super(props);
  }

  // Hàm xử lý chức năng xem
  LvsHandleView = (LvsStudent) => {
    this.props.onLvsHandleView(LvsStudent);
  };

  // Hàm xử lý chức năng sửa
  LvsHandleEdit = (LvsStudent) => {
    this.props.onLvsHandleEdit(LvsStudent);
  };

  // Hàm xử lý chức năng xóa
  LvsHandleDelete = (LvsStudent) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xóa sinh viên ${LvsStudent.LvsStudentName}?`
      )
    ) {
      this.props.onLvsHandleDelete(LvsStudent.LvsId);
    }
  };

  render() {
    let { renderLvsStudent, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{renderLvsStudent.LvsId}</td>
        <td>{renderLvsStudent.LvsStudentName}</td>
        <td>{renderLvsStudent.LvsAge}</td>
        <td>{renderLvsStudent.LvsGender}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text mx-1"
              onClick={() => this.LvsHandleView(renderLvsStudent)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text mx-1"
              onClick={() => this.LvsHandleEdit(renderLvsStudent)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text mx-1"
              onClick={() => this.LvsHandleDelete(renderLvsStudent)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default LvsStudent;
