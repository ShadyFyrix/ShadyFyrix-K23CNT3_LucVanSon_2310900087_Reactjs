import React from "react";

export default function LvsClassFuncProps(props) {
  const LvsHan1buttonclick1 = () => {
    alert("Du lieu tu props: " + props.LvsRenderName);
    console.log("xin chao: ", props.LvsRenderName);
  };
  const LvsHanldeButtonclick2 = (param) => {
    //lay du lieu tu props
    alert("Du lieu tu props (button click 2): " + props.LvsRenderName);
    //lay du lieu tu tham so
    console.log("==============================");
    console.log("Hi:", param);
    console.log("==============================");
  };
  // className="alert alert-info
  return (
    <div>
      <button className="btn btn-primary mx-1" onClick={LvsHan1buttonclick1}>
        button 1
      </button>

      <button
        className="btn btn-primary mx-1"
        onClick={() => LvsHanldeButtonclick2("button2")}
      >
        button 2
      </button>
    </div>
  );
}
