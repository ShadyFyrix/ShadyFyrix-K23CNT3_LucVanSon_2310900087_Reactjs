import React, { Component } from "react";
import LvsFuncEvent1 from "./components/LvsFuncEvent1";
import LvsFuncCompEventProps from "./components/LvsFuncCompEventProps";
import LvsClassCompProps from "./components/LvsClassCompProps";
import LvsClassCompEventState from "./components/LvsClassCompEventState";
import LvsClassCompEventPostData from "./components/LvsClassCompEventPostData";

class LvsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LvsNoiDung: "No Content bruh",
    };
  }

  //ham xu ly su kien
  LVShandleDatatoapp = (data) => {
    alert(data);
  };

  render() {
    return (
      <div className="container border mt-3">
        <h1 className="text-center text-danger ">Lục văn sơn k23cnt3</h1>
        <hr />

        <div>
          <h2>Function components event</h2>
          <LvsFuncEvent1 />
        </div>
        <hr />

        <div>
          <h2>Function components event props</h2>
          <LvsFuncCompEventProps LvsRenderName="Lục Văn Sơn" />
        </div>
        <hr />

        <div>
          <h2>Class components event props</h2>
          <LvsClassCompProps LvsRenderNameTitle="welcome to Shady" />
        </div>
        <hr />

        <div>
          <h2>Class components event state</h2>
          <LvsClassCompEventState />
        </div>
        <hr />

        <div>
          <h1>{this.state.LvsNoiDung}</h1>
          <h2>Class component event post data to app</h2>
          <LvsClassCompEventPostData onLvsDatatoapp={this.LVShandleDatatoapp} />
        </div>
      </div>
    );
  }
}

export default LvsApp;
