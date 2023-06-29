import React from "react";
import { useContext } from "react";
import search from "../assets/icon-search.svg";
import { Context } from "../context";

function Search() {
  const context = useContext(Context);
  const handleChange = (e) => {
    context.setSearchWord(e.target.value);
    console.log(context.searchWord);
  };
  return (
    <div className=" w-full mt-4 relative transition-all duration-200 ease-in">
      <input
        type="text"
        className="h-11 w-full border-2 border-purple-500 rounded-[12px] outline-none pl-6"
        onChange={(event) => handleChange(event)}
      />
      <img src={search} className="absolute right-4 top-3" />
    </div>
  );
}

export default Search;
