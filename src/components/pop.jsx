import React from "react";
import { useContext } from "react";
import { Context } from "../context";

const fonts = [
  { name: "Sans serief", active: false },
  { name: "Sans", active: false },
  { name: "Mono", active: false },
];

function Pop() {
  const context = useContext(Context);
  return (
    <div
      className={`absolute z-[99] w-24 rounded p-2 bg-white transition-all duration-1000 ease cursor-pointer ${
        context.popVisible ? "top-12" : "-top-28 "
      }  `}
    >
      {fonts.map((font) => {
        return <h3 key={Math.random()}>{font.name}</h3>;
      })}
    </div>
  );
}

export default Pop;
