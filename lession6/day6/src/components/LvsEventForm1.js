import React, { Component } from "react";

export default class LvsEventForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsStudentName: "Lục Sơn",
    };
  }
  LvsHandleChange = (event) => {
    this.setState({
      LvsStudentName: event.target.value,
    });
  };

  LvsHandleSubmit = (event) => {
    alert(`Hello, ${this.state.LvsStudentName}`);
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Form Input</h1>
        <form onSubmit={this.LvsHandleSubmit}>
          <label htmlFor="LvsStudentName">
            <input
              type="text"
              className="form-control"
              id="LvsStudentName"
              value={this.state.LvsStudentName}
              onChange={this.LvsHandleChange}
            />
          </label>
          <button className="btn btn-primary mx-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
