export const SET_CHARACTERS = "SET_CHARACTERS";

export function setCharacters(characters) {
  return { type: SET_CHARACTERS, payload: characters };
}
