import { SET_CHARACTERS, RESET_CHARACTERS } from "../actions/charactersAction";

const defaultCharacters = null;

function charactersReducer(state = defaultCharacters, action) {
  switch (action.type) {
    case SET_CHARACTERS: {
      return action.payload;
    }
    case RESET_CHARACTERS: {
      return state;
    }
    default: {
      return state;
    }
  }
}
export default charactersReducer;
