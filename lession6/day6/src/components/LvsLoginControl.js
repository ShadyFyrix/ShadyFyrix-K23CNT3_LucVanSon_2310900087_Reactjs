import React from "react";
import LvsLoginComp from "./LvsLoginComp";
import LvsLogoutComp from "./LvsLogoutComp";

export default function LvsLoginControl(props) {
  var isLoggedIn = props.isLoggedIn;
  var LvsLoginControl = isLoggedIn ? <LvsLoginComp /> : <LvsLogoutComp />;
  return <div>{LvsLoginControl}</div>;
}
