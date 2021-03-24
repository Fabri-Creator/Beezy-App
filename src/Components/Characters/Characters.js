import { useState, useEffect } from "react";

import { getCharacters, getSpecificCharacter } from "./../../Services";

import Displayer from "./../Displayer";
import SuperSearch from "./../SuperSearch";

import "./Characters.scss";

const Characters = () => {
  const [superSearch, setSuperSearch] = useState(null);
  const [superList, setSuperList] = useState(null);

  useEffect(() => {
    // Codigo de función fuera porque se usa dos veces?
    getCharacters().then((characters) => {
      setSuperList(characters);
    });
  }, []);

  const handleSuperHeroName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    value === "" || undefined
      ? // funcion fuera porque se usa dos veces?
        getCharacters().then((characters) => {
          setSuperList(characters);
        })
      : setSuperSearch(value);
  };

  const handleSuperHeroSearch = () => {
    superSearch &&
      getSpecificCharacter(superSearch).then((characters) => {
        setSuperList(characters);
      });
  };

  return (
    <>
      <SuperSearch
        handleSuperHeroName={handleSuperHeroName}
        handleSuperHeroSearch={handleSuperHeroSearch}
      />
      <Displayer dataList={superList} />
    </>
  );
};

export default Characters;
