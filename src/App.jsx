import Header from "./components/header";
import { useState } from "react";
import { Context } from "./context";
import Search from "./components/search";
import Word from "./components/word";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [popVisible, setPopVisible] = useState(false);
  const [font, setFont] = useState("Sofia");
  const [searchWord, setSearchWord] = useState(null);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        popVisible,
        setPopVisible,
        font,
        setFont,
        searchWord,
        setSearchWord,
        valid,
        setValid,
      }}
    >
      <div className={`min-h-screen p-3 font-${font}`}>
        <Header />
        <Search />
        <Word />
      </div>
    </Context.Provider>
  );
}

export default App;
