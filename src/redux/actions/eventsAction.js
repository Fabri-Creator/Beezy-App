export const SET_EVENTS = "SET_EVENTS";
export const RESET_EVENTS = " RESET_EVENTS ";

export function setEvents(events) {
  return { type: SET_EVENTS, payload: events };
}
export function setResetEvents() {
  return { type: RESET_EVENTS };
}
