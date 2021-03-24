import { useState, useEffect } from "react";

import { getEvents } from "../../Services";

import Displayer from "../Displayer";

import "./MarvelEvent.scss";

const MarvelEvent = () => {
  const [eventsList, setEventsList] = useState(null);

  useEffect(() => {
    getEvents().then((eventsList) => {
      setEventsList(eventsList);
    });
  }, []);

  return (
    <>
      <Displayer dataList={eventsList}></Displayer>
    </>
  );
};
export default MarvelEvent;
