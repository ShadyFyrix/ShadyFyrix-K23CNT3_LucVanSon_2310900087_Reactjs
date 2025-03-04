import React, { Component } from "react";
import LvsStudent from "./LvsStudent";

class LvsStudentList extends Component {
  constructor(props) {
    super(props);
  }
  // Hàm xử lý sự kiện xêm
  LvsHandleView = (LvsStudent) => {
    // Chuyển dữ liệu lên LvsApp
    this.props.onLvsHandleView(LvsStudent);
  };

  render() {
    // lấy dữ liệu trong props từ LvsApp chuyển xuống
    let { renderLvsStudents } = this.props;
    console.log("List:", renderLvsStudents);

    // chuyển dữ liệu vào LvsStudent để hiển thị
    let LvsElementStudent = renderLvsStudents.map((LvsItem, index) => {
      return (
        <LvsStudent
          key={index}
          renderLvsStudent={LvsItem}
          onLvsHandleView={this.LvsHandleView}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{LvsElementStudent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LvsStudentList;
