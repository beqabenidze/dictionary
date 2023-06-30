import React from "react";
import { useContext } from "react";
import search from "../assets/icon-search.svg";
import { Context } from "../context";

function Search() {
  const context = useContext(Context);
  const handlePress = (e) => {
    if (e.key === "Enter") {
      context.setSearchWord(e.target.value);
    }
  };
  const handleChange = (e) => {
    e.target.value == "" ? context.setValid(false) : context.setValid(true);
  };

  return (
    <div className=" w-full mt-4 relative transition-all duration-200 ease-in">
      <input
        type="text"
        className="h-11 w-full border-2 border-purple-500 rounded-[12px] outline-none pl-6"
        placeholder="Search for any word"
        onKeyPress={handlePress}
        onChange={handleChange}
        style={{ border: !context.valid ? "1px solid red" : null }}
      />
      <img src={search} className="absolute right-4 top-3" />
    </div>
  );
}

export default Search;
