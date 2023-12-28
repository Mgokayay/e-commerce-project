export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const loggedIn = (data) => ({
  type: LOGGED_IN,
  payload: data,
});
export const loggedOut = () => ({
  type: LOGGED_OUT,
});
