import Header from "./components/header";
import { useState } from "react";
import { Context } from "./context";

function App() {
  const [theme, setTheme] = useState();
  const [popVisible, setPopVisible] = useState(false);
  return (
    <Context.Provider value={{ theme, setTheme, popVisible, setPopVisible }}>
      <div className="bg-red-200 min-h-screen p-3">
        <Header />
      </div>
    </Context.Provider>
  );
}

export default App;
