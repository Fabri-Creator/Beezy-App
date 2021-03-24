import { useEffect } from "react";

import { getCharacters } from "./Services";

import "./App.scss";

function App() {
  useEffect(() => {
    getCharacters();
  }, []);

  return <div className="App"></div>;
}

export default App;
