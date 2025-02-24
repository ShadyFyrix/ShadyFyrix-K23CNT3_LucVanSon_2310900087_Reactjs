import React from "react";

export default function LvsFuncEvent1() {
  const lvsEventButton1 = () => {
    alert("Hey :D");
  };

  const lvsEventButton2 = () => {
    alert("HiHi :D");
  };

  const lvsEventButton3 = (name) => {
    alert("Hello " + name);
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={lvsEventButton1}>
        Click me 1
      </button>
      <button className="btn btn-primary m-2" onClick={lvsEventButton2}>
        Click me 2
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => lvsEventButton3("Lục Văn Sơn")}
      >
        Click me 3
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => lvsEventButton3("ShadyFyrix")}
      >
        Click me 4
      </button>
    </div>
  );
}
