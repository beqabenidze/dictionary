import React from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";

function Header() {
  return (
    <div className="flex justify-between bg-green-900">
      <img src={logo} />
      <div className="flex align-center justify-between gap-2">
        <div>mono</div>
        <hr></hr>
        <div></div>
        <img src={moon} />
      </div>
    </div>
  );
}

export default Header;
