import React, { Component } from "react";

class LvsClassCompEventPostData extends Component {
  // Hàm xử lý sự kiện
  LvsEventHandleClick = () => {
    this.props.onLvsDatatoapp("Dữ liệu từ component con - LvsEventHandleClick");
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.LvsEventHandleClick}>
          Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}
export default LvsClassCompEventPostData;
