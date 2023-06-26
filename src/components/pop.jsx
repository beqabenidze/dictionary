import React from "react";
import { useContext } from "react";
import { Context } from "../context";

const fonts = [
  { name: "Sofia", active: false },
  { name: "Monomaniac", active: false },
  { name: "Shantell", active: false },
];

function Pop() {
  const context = useContext(Context);
  return (
    <div
      className={`absolute z-[99] w-fit rounded border-customPurple border-[1px] p-2 bg-white transition-all duration-1000 ease cursor-pointer -left-8 ${
        context.popVisible ? "top-12" : "-top-28 "
      }  `}
    >
      {fonts.map((font) => {
        return (
          <h3
            key={Math.random()}
            className="hover:text-customPurple"
            onClick={() => {
              context.setFont(font.name);
            }}
          >
            {font.name}
          </h3>
        );
      })}
    </div>
  );
}

export default Pop;
