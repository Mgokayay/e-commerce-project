export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const fetchLoggedIn = (data) => ({
  type: LOGGED_IN,
  payload: data,
});
export const fetchLoggedOut = () => ({
  type: LOGGED_OUT,
});
