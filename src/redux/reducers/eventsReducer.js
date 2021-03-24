import { SET_EVENTS } from "../actions/eventsAction";

const defaultEvents = null;

function eventsReducer(state = defaultEvents, action) {
  switch (action.type) {
    case SET_EVENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default eventsReducer;
