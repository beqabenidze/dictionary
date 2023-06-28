import React from "react";
import search from "../assets/icon-search.svg";

function Search() {
  return (
    <div className=" w-full mt-4 relative transition-all duration-200 ease-in">
      <input
        type="text"
        className="h-11 w-full border-2 border-purple-500 rounded-[12px] outline-none pl-6"
      />
      <img src={search} className="absolute right-4 top-3" />
    </div>
  );
}

export default Search;
