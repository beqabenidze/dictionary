import React from "react";
import play from "../assets/icon-play.svg";
import windoww from "../assets/icon-new-window.svg";
import axios from "axios";

function Word() {
  return (
    <div className="bg-white mt-4 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[32px]">House</h1>
          <h4 className="text-customPurple">/ˈkiːbɔːd/</h4>
        </div>
        <img src={play} className="w-14 h-14" />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <h5 className="font-bold">noun</h5>
        <hr className="w-5/6 bg-hr h-[1px] border-none"></hr>
      </div>
      <div className="flex flex-col gap-5 mt-7">
        <h6 className="text-gray-400">Meaning</h6>
        <ul className=" flex flex-col gap-3 list-disc relative left-6 w-4/5 ">
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
        <div className="flex items-center justify-between w-[250px] ">
          <h6 className="text-gray-400">Synonyms</h6>
          <h6 className="text-customPurple">aegaefgaefaef</h6>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h5 className="font-bold">verb</h5>
          <hr className="w-5/6 bg-hr h-[1px] border-none"></hr>
        </div>
        <h6 className="text-gray-400">Meaning</h6>
        <ul className=" flex flex-col gap-3 list-disc relative left-6 w-4/5 ">
          <li>
            To type on a computer keyboard.<p>aefaefawfafawff</p>
          </li>
        </ul>
        <hr className="w-full bg-hr h-[1px] border-none"></hr>
        <h4 className="underline">Source</h4>
        <div className="flex flex-row items-center gap-2">
          <p>https://en.wiktionary.org/wiki/keyboard</p>
          <img src={windoww} />
        </div>
      </div>
    </div>
  );
}

export default Word;
