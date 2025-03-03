import React from "react";

export default function LvsRenderArry() {
  const LvsNumbers = [10, 20, 30, 40, 50];
  const LvsListNumbers = LvsNumbers.map((number) => <li>{number}</li>);
  return (
    <div>
      LvsRenderArry
      {LvsListNumbers}
    </div>
  );
}
