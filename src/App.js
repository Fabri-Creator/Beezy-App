import { useEffect } from "react";

import { getCharacters, getSpecificCharacter, getEvents } from "./Services";

import "./App.scss";

function App() {
  useEffect(() => {
    getCharacters();
    getSpecificCharacter("Hul");
    getEvents();
  }, []);

  return <div className="App"></div>;
}

export default App;
