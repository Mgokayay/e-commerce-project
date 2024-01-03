export const SET_USER = "SET_USER";

export const DELETE_USER = "DELETE_USER";

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  payload: data,
});
