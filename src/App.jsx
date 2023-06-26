import Header from "./components/header";
import { useState } from "react";
import { Context } from "./context";
import Search from "./components/search";
import Word from "./components/word";

function App() {
  const [theme, setTheme] = useState();
  const [popVisible, setPopVisible] = useState(false);
  return (
    <Context.Provider value={{ theme, setTheme, popVisible, setPopVisible }}>
      <div className=" min-h-screen p-3 ">
        <Header />
        <Search />
        <Word />
      </div>
    </Context.Provider>
  );
}

export default App;
