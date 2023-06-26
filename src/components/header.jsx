import React from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import arrow from "../assets/icon-arrow-down.svg";
import Pop from "./pop";
import { useContext } from "react";
import { Context } from "../context";

function Header() {
  const context = useContext(Context);
  return (
    <div className="flex justify-between bg-white">
      <img src={logo} />
      <div className="flex gap-5 relative items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            context.setPopVisible(!context.popVisible);
          }}
        >
          <h3 className="text">Mono</h3>
          <img
            src={arrow}
            className={`transform ${
              context.popVisible ? "rotate-180" : "rotate-0"
            }`}
            style={{ transition: "transform 0.5s" }}
          />
          <Pop />
        </div>

        <hr className="bg-hr w-[1px] h-4/5 m-1 border-none "></hr>

        <label className="w-10 h-5 relative">
          <input type="checkbox" className="hidden" />
          <div className="bg-gray-500 absolute top-0 left-0 w-10 h-5 rounded-full">
            <div className="absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </label>

        <img src={moon} className="h-4/5" />
      </div>
    </div>
  );
}

export default Header;
