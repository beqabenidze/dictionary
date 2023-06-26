import Header from "./components/header";
import { useState } from "react";
import { Context } from "./context";
import Search from "./components/search";
import Word from "./components/word";

function App() {
  const [theme, setTheme] = useState();
  const [popVisible, setPopVisible] = useState(false);
  const [font, setFont] = useState("Sofia");
  return (
    <Context.Provider
      value={{ theme, setTheme, popVisible, setPopVisible, font, setFont }}
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
