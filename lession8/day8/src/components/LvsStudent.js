import React, { Component } from "react";

class LvsStudent extends Component {
  constructor(props) {
    super(props);
  }

  // Hàm xử lý chức năng xem
  LvsHandleView = (LvsStudent) => {
    // Chuyển lên LvsStudentList
    this.props.onLvsHandleView(LvsStudent);
  };
  render() {
    // lấy đối tượng dữ liệu chuyển từ LvsStudentList
    let { renderLvsStudent, key } = this.props;
    console.log("Student:", renderLvsStudent);

    return (
      <>
        <tr>
          <td>{key}</td>
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
              >
                Sửa
              </button>
              <button
                type="button"
                className="btn btn-success btn-icon-text mx-1"
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default LvsStudent;
