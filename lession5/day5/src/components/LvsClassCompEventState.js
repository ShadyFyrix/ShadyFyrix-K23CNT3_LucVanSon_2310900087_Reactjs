import React, { Component } from "react";

export default class LvsClassCompEventState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsfullName: "Lục Văn Sơn",
      LvsAge: 20,
    };
  }
  //ham xu ly
  LvsEventHandleclick1 = () => {
    //lay du lieu trong state
    alert(
      "FullName: " + this.state.LvsfullName + "\n Age: " + this.state.LvsAge
    );
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.LvsEventHandleclick1}>
          Button 1 - Dữ liệu trong state
        </button>
      </div>
    );
  }
}
