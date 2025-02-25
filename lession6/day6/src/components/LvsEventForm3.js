import React, { Component } from "react";

export default class LvsEventForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsGioiTinh: "Nam",
    };
  }

  LvsHandleChange = (event) => {
    this.setState({
      LvsGioiTinh: event.target.value,
    });
  };

  LvsHandleSubmit = (event) => {
    event.preventDefault();
    alert(`You have selected: ${this.state.LvsGioiTinh}`);
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Form Radio</h1>
        <form onSubmit={this.LvsHandleSubmit}>
          <label htmlFor="">Chọn Khoá Học</label>
          <input
            type="radio"
            name="LvsGioiTinh"
            value="Nam"
            id="LvsNam"
            checked={this.state.LvsGioiTinh === "Nam"}
            onChange={this.LvsHandleChange}
            className="mx-2"
          />
          <label htmlFor="LvsNam">Nam</label>
          <input
            type="radio"
            name="LvsGioiTinh"
            value="Nữ"
            id="LvsNu"
            checked={this.state.LvsGioiTinh === "Nữ"}
            onChange={this.LvsHandleChange}
            className="mx-2"
          />
          <label htmlFor="LvsNu">Nữ</label>
          <input
            type="radio"
            name="LvsGioiTinh"
            value="Khác"
            id="LvsKhac"
            checked={this.state.LvsGioiTinh === "Khác"}
            onChange={this.LvsHandleChange}
            className="mx-2"
          />
          <label htmlFor="LvsKhac">Khác</label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
