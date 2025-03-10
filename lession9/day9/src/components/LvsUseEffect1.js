import React, { useEffect, useState } from "react";

export default function LvsUseEffect1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect (Call Back)");
  });
  useEffect(() => {
    console.log("useEffect (Call Back); Chỉ 1 lần duy nhất");
  });
  useEffect(() => {
    console.log("Count has changed: ", count);
  });
  return (
    <div>
      LvsUseEffect1
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
