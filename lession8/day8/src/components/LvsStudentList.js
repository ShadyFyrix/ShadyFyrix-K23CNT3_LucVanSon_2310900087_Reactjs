import React, { Component } from "react";
import LvsStudent from "./LvsStudent";

class LvsStudentList extends Component {
  constructor(props) {
    super(props);
  }
  // Hàm xử lý sự kiện xem
  LvsHandleView = (LvsStudent) => {
    this.props.onLvsHandleView(LvsStudent);
  };

  // Hàm xử lý sự kiện sửa
  LvsHandleEdit = (LvsStudent) => {
    this.props.onLvsHandleEdit(LvsStudent);
  };

  // Hàm xử lý sự kiện xóa
  LvsHandleDelete = (LvsId) => {
    this.props.onLvsHandleDelete(LvsId);
  };

  render() {
    let { renderLvsStudents } = this.props;

    let LvsElementStudent = renderLvsStudents.map((LvsItem, index) => {
      return (
        <LvsStudent
          key={LvsItem.LvsId}
          index={index}
          renderLvsStudent={LvsItem}
          onLvsHandleView={this.LvsHandleView}
          onLvsHandleEdit={this.LvsHandleEdit}
          onLvsHandleDelete={this.LvsHandleDelete}
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
