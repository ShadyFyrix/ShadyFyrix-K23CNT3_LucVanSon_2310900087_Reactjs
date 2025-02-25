import React, { Component } from "react";

export default class LvsEventForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsCourse: "ReactJS",
    };

    this.LvsHandleChange = this.LvsHandleChange.bind(this);
    this.LvsHandleSubmit = this.LvsHandleSubmit.bind(this);
  }
  //Hàm xử lý sự kiện thay đổi giá trị của select Khoá Học
  LvsHandleChange(event) {
    this.setState({ LvsCourse: event.target.value });
  }

  LvsHandleSubmit(event) {
    alert("Khoá học bạn chọn là: " + this.state.LvsCourse);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Form Select</h1>
        <form onSubmit={this.LvsHandleSubmit}>
          <label>
            Chọn Khoá Học
            <select
              value={this.state.LvsCourse}
              onChange={this.LvsHandleChange}
              className="mx-3"
            >
              <option value="ReactJS">ReactJS</option>
              <option value="Html">Html</option>
              <option value="JS">JavaScript</option>
              <option value="PHP">PHP</option>
              <option value="CSS">CSS</option>
            </select>
          </label>
          <input type="submit" value="Submit" className="mx-3" />
        </form>
      </div>
    );
  }
}
