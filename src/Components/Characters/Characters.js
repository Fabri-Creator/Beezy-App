import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { setCharacters } from "./../../redux/actions/charactersAction";
import { getCharacters, getSpecificCharacter } from "./../../Services";

import Displayer from "./../Displayer";
import SuperSearch from "./../SuperSearch";

import "./Characters.scss";

const Characters = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);
  const [superList, setSuperList] = useState(null);

  useEffect(() => {
    getCharacters().then((characters) => {
      setSuperList(characters);
    });
  }, []);

  useEffect(() => {
    superList && dispatch(setCharacters(superList));
  }, [superList, dispatch]);

  const handleSuperHeroName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputValue(value);
    if (!value) {
      getCharacters().then((characters) => {
        setSuperList(characters);
      });
    }
  };

  const handleSuperHeroSearch = useCallback(() => {
    inputValue &&
      getSpecificCharacter(inputValue).then((characters) => {
        setSuperList(characters);
      });
  }, [inputValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSuperHeroSearch();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, handleSuperHeroSearch]);

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
