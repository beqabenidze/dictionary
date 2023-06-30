import React from "react";
import play from "../assets/icon-play.svg";
import windoww from "../assets/icon-new-window.svg";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context";
import { useEffect } from "react";

function Word() {
  const [newWord, setNewWord] = useState(undefined);
  const [error, setError] = useState(false);

  const context = useContext(Context);

  const getWord = () => {
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${context?.searchWord}`
      )
      .then((response) => {
        setNewWord(response.data[0]);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    getWord();
  }, [context.searchWord]);

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return context.searchWord == null ? (
    <div className="w-100% flex flex-col text-center items-center justify-center gap-6 mt-20">
      <h1 className="text-[26px]">Type any word and hit Enter to search</h1>
    </div>
  ) : !error ? (
    <div className="bg-base-100 mt-4 transition-all duration-200 ease-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[32px] ">{newWord?.word}</h1>
          <h4 className="text-customPurple">{newWord?.phonetic}</h4>
        </div>
        <img
          src={play}
          className="w-14 h-14 cursor-pointer"
          onClick={() => playAudio(newWord?.phonetics[0]?.audio)}
        />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <h5 className="font-bold">noun</h5>
        <hr className="w-5/6 bg-hr h-[1px] border-none"></hr>
      </div>
      <div className="flex flex-col gap-5 mt-7">
        <h6 className="text-gray-400">Meaning</h6>
        <ul className=" flex flex-col gap-3 list-disc relative left-6 w-4/5 ">
          {newWord?.meanings[0].definitions.map((noun) => {
            return <li key={Math.random()}>{noun.definition}</li>;
          })}
        </ul>
        {newWord?.meanings[0].synonyms[0] ? (
          <div className="flex items-center gap-[40px] ">
            <h6 className="text-gray-400">Synonyms</h6>
            <h6 className="text-customPurple">
              {newWord?.meanings[0].synonyms[0]}
            </h6>
          </div>
        ) : null}

        {newWord?.meanings[1] ? (
          <div>
            <div className="mt-5 flex items-center justify-between">
              <h5 className="font-bold">verb</h5>
              <hr className="w-5/6 bg-hr h-[1px] border-none" />
            </div>
            <h6 className="text-gray-400">Meaning</h6>
            <ul className="flex flex-col gap-3 list-disc relative left-6 w-4/5">
              {newWord?.meanings[1]?.definitions.map((noun) => {
                return <li key={Math.random()}>{noun.definition}</li>;
              })}
            </ul>
          </div>
        ) : null}
        <hr className="w-full bg-hr h-[1px] border-none"></hr>
        <h4 className="underline">Source</h4>
        <div className="flex flex-row items-center gap-2">
          <p>{newWord?.sourceUrls}</p>
          <a href={newWord?.sourceUrls} target="_blank">
            <img src={windoww} />
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-100% flex flex-col text-center items-center justify-center gap-6 mt-20">
      <h1 className="text-[26px]">No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default Word;
