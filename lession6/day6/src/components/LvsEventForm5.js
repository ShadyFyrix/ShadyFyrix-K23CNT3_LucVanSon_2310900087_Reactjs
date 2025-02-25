import React, { Component } from "react";

export default class LvsEventForm5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsName: "Lục Sơn",
      LvsAge: "20",
      LvsGender: "Nam",
      LvsCourse: "Html",
      selectedItems: ["Pizza"],
    };
  }

  LvsHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  LvsHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.selectedItems];
    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter((option) => option !== value);

    this.setState({
      selectedItems: selectedOptions,
    });
  };

  LvsHandleSubmit = (event) => {
    event.preventDefault();
    const { LvsName, LvsAge, LvsGender, LvsCourse, selectedItems } = this.state;
    alert(
      `Student Information:\nName: ${LvsName}\nAge: ${LvsAge}\nGender: ${LvsGender}\nCourse: ${LvsCourse}\nOrder: ${selectedItems.join(
        ", "
      )}`
    );
  };

  render() {
    return (
      <form onSubmit={this.LvsHandleSubmit}>
        <div>
          <label htmlFor="LvsName">Name:</label>
          <input
            type="text"
            className="form-control"
            id="LvsName"
            name="LvsName"
            value={this.state.LvsName}
            onChange={this.LvsHandleChange}
          />
        </div>
        <div>
          <label htmlFor="LvsAge">Age:</label>
          <input
            type="number"
            className="form-control"
            id="LvsAge"
            name="LvsAge"
            value={this.state.LvsAge}
            onChange={this.LvsHandleChange}
          />
        </div>
        <div>
          <label htmlFor="LvsGender">Gender:</label>
          <select
            className="form-control"
            id="LvsGender"
            name="LvsGender"
            value={this.state.LvsGender}
            onChange={this.LvsHandleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="LvsCourse">Course:</label>
          <select
            className="form-control"
            id="LvsCourse"
            name="LvsCourse"
            value={this.state.LvsCourse}
            onChange={this.LvsHandleChange}
          >
            <option value="ReactJS">ReactJS</option>
            <option value="Html">Html</option>
            <option value="JS">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value="CSS">CSS</option>
          </select>
        </div>
        <div>
          <label>
            Order:
            <br />
            <input
              type="checkbox"
              value="Pizza"
              checked={this.state.selectedItems.includes("Pizza")}
              onChange={this.LvsHandleCheckboxChange}
            />
            Pizza
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Burger"
              checked={this.state.selectedItems.includes("Burger")}
              onChange={this.LvsHandleCheckboxChange}
            />
            Burger
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Sushi"
              checked={this.state.selectedItems.includes("Sushi")}
              onChange={this.LvsHandleCheckboxChange}
            />
            Sushi
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Salad"
              checked={this.state.selectedItems.includes("Salad")}
              onChange={this.LvsHandleCheckboxChange}
            />
            Salad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
