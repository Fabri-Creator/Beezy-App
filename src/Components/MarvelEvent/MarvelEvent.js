import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getEvents } from "../../Services";
import { setEvents } from "./../../redux/actions/eventsAction";
import { orderByAlpha } from "../../Logic";

import Displayer from "../Displayer";
import AlphaSort from "../AlphaSort";

import "./MarvelEvent.scss";

const MarvelEvent = () => {
  const dispatch = useDispatch();
  const [eventsList, setEventsList] = useState(null);

  useEffect(() => {
    getEvents().then((eventsList) => {
      setEventsList(eventsList);
    });
  }, []);

  useEffect(() => {
    dispatch(setEvents(eventsList));
  }, [eventsList, dispatch]);

  const handleSort = () => {
    return setEventsList(orderByAlpha(eventsList));
  };

  return (
    <>
      <AlphaSort handleSort={handleSort} />
      <Displayer dataList={eventsList} />
    </>
  );
};

export default MarvelEvent;
