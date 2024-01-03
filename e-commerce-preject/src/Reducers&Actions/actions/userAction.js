export const SET_USER = "SET_USER";
export const LOGIN_DATA = "LOGIN_DATA";
export const DELETE_USER = "DELETE_USER";

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  payload: data,
});

export const loginData = (data) => ({
  type: LOGIN_DATA,
  payload: data,
});
