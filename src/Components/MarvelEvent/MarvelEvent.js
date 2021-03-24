import { useState, useEffect } from "react";

import { getEvents } from "../../Services";
import { orderByAlpha } from "../../Logic";

import Displayer from "../Displayer";
import AlphaSort from "../AlphaSort";

import "./MarvelEvent.scss";

const MarvelEvent = () => {
  const [eventsList, setEventsList] = useState(null);

  useEffect(() => {
    getEvents().then((eventsList) => {
      setEventsList(eventsList);
    });
  }, []);

  const handleSort = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value === "Z-A") {
      const newOrder = orderByAlpha(eventsList);
      return setEventsList(newOrder);
    } else {
      return getEvents(setEventsList);
    }
  };

  return (
    <>
      <AlphaSort handleSort={handleSort}></AlphaSort>
      <Displayer dataList={eventsList}></Displayer>
    </>
  );
};
export default MarvelEvent;
