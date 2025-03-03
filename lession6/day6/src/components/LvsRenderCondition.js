import React, { Component } from "react";
import LvsLoginControl from "./LvsLoginControl";

export default class LvsRenderCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    // xử lý sự kiện khi click vào nút Login
    this.LvsHandleLogin = () => {
      this.setState({
        isLoggedIn: true,
      });
    };

    // xử lý sự kiện khi click vào nút Logout
    this.LvsHandleLogout = () => {
      this.setState({
        isLoggedIn: false,
      });
    };
  }
  render() {
    let flag = this.state.isLoggedIn;
    return (
      <div>
        <h2> Render Condition </h2>
        <hr />
        <LvsLoginControl isLoggedIn={flag} />
        {flag ? (
          <button onClick={this.LvsHandleLogout}>Logout</button>
        ) : (
          <button onClick={this.LvsHandleLogin}>Login</button>
        )}
      </div>
    );
  }
}
