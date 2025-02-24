import React, { Component } from "react";

export default class LvsClassFuncEvent extends Component {
  LvsbuttonclickEven1 = () => {
    alert("button 1 clicked");
  };
  LvsbuttonclickEven2 = () => {
    alert("button 2 clicked");
  };
  render() {
    return (
      <div className="alert alert-danger">
        <button
          className="btn btn-primary mx-1"
          onClick={this.LvsbuttonclickEven1}
        >
          button1{" "}
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={this.LvsbuttonclickEven2}
        >
          button2{" "}
        </button>
      </div>
    );
  }
}
