import React, { Component } from "react";

export default class LvsEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: ["Pizza"],
    };
  }

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
    alert(`Bạn Order : ${this.state.selectedItems.join(", ")}`);
  };

  render() {
    return (
      <form onSubmit={this.LvsHandleSubmit}>
        <label>
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
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
