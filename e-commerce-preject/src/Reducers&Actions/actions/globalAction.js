export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORİES = "SET_CATEGORİES";

export const loggedIn = (data) => ({
  type: LOGGED_IN,
  payload: data,
});
export const loggedOut = () => ({
  type: LOGGED_OUT,
});

export const setRoles = (data) => ({
  type: SET_ROLES,
  payload: data,
});
export const setCategories = (data) => ({
  type: SET_CATEGORİES,
  payload: data,
});
