import { useEffect } from "react";

import { getCharacters, getSpecificCharacter } from "./Services";

import "./App.scss";

function App() {
  useEffect(() => {
    getCharacters();
    getSpecificCharacter("Hul");
  }, []);

  return <div className="App"></div>;
}

export default App;
