import { SET_CHARACTERS } from "../actions/charactersAction";
import { SET_EVENTS } from "../actions/eventsAction";

const defaultReducer = { characters: null, events: null };

export default function reducer(state = defaultReducer, action) {
  switch (action.type) {
    case SET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    case SET_EVENTS: {
      return {
        ...state,
        events: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
