import { SET_CHARACTERS } from "../actions/charactersAction";

const defaultCharacters = null;

function charactersReducer(state = defaultCharacters, action) {
  switch (action.type) {
    case SET_CHARACTERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default charactersReducer;
