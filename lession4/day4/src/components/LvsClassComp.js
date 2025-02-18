import React, { Component } from 'react'

export default class LvsClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "Lục Sơn",
            address: "Thanh Hoá",
            Company: "ShadyCompany",
            note: "This is a note",
        }
    }
    //hàm xử lý sự kiện
    changeInfo = () => {
        //câp nhật lại state
        this.setState({
            fullname: "The Shady",
            address: "Hà Nội",})
        }
  render() {
    return (
      <div>
        <h2>trình bày dữ liệu từ State</h2>
        <p>Info State: {this.state.fullname}</p>
        <p>Address: {this.state.address}</p>
        <p>Company: {this.state.Company}</p>
        <hr/>
        <button className="btn btn-primary" onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ props </h3>
        <p>Name : {this.props.RenderName}</p>
        <p>Fullname: {this.props.renderUsers?.fullname}</p>
        <p>Age: {this.props.renderUsers?.age}</p>
        <p>Phone: {this.props.renderUsers?.phone}</p>
      </div>
    )
  }
}
