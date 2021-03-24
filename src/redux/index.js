import { combineReducers } from "redux";
import characterReducer from "./reducers/charactersReducer";
import eventsReducer from "./reducers/eventsReducer";

const rootReducer = combineReducers({
  characters: characterReducer,
  events: eventsReducer,
});

export default rootReducer;
