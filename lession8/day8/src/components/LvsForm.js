import React, { Component } from "react";

class LvsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsId: "",
      LvsStudentName: "",
      LvsAge: "",
      LvsGender: "",
      LvsBirthday: "",
      LvsBirthPlace: "",
      LvsAddress: "",
    };
  }

  // Khi nhận dữ liệu mới từ props, cập nhật state
  componentDidUpdate(prevProps) {
    if (
      prevProps.renderLvsStudent !== this.props.renderLvsStudent &&
      this.props.renderLvsStudent
    ) {
      this.setState({ ...this.props.renderLvsStudent });
    }
  }

  // Xử lý thay đổi trên các input
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Xử lý khi nhấn Submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLvsHandleSubmit(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="LvsId"
                  value={this.state.LvsId}
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="LvsStudentName"
                  value={this.state.LvsStudentName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  name="LvsAge"
                  value={this.state.LvsAge}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="LvsGender"
                  value={this.state.LvsGender}
                  onChange={this.handleChange}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="LvsBirthday"
                  value={this.state.LvsBirthday}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="LvsBirthPlace"
                  value={this.state.LvsBirthPlace}
                  onChange={this.handleChange}
                >
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="DN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="LvsAddress"
                  value={this.state.LvsAddress}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Lưu
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LvsForm;
