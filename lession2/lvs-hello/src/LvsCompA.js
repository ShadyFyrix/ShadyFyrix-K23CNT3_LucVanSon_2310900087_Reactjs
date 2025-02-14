import React, { Component } from 'react'

export default class LvsCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lục Văn Sơn",
        };
    }

    render() {
        return (
            <div>
                <h2>LVS Component</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.lvsName}</p>
                <p>Address: {this.props.lvsAddress}</p>
            </div>
        )
    }
}