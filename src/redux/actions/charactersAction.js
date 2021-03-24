export const SET_CHARACTERS = "SET_CHARACTERS";
export const RESET_CHARACTERS = "RESET_CHARACTERS";

export function setCharacters(characters) {
  return { type: SET_CHARACTERS, payload: characters };
}
export function setResetCharacters() {
  return { type: RESET_CHARACTERS };
}
