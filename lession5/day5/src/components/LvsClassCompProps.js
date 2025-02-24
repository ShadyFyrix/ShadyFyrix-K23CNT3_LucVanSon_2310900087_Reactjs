import React, { Component } from "react";

export default class LvsClassFuncProps extends Component {
  LvsEventHandleclick = () => {
    alert("Hello, " + this.props.LvsRenderNameTitle);
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.LvsEventHandleclick}>
          Button 1
        </button>
      </div>
    );
  }
}
