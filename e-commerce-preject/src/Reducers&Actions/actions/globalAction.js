export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORİES = "SET_CATEGORİES";

export const setRoles = (data) => ({
  type: SET_ROLES,
  payload: data,
});
export const setCategories = (data) => ({
  type: SET_CATEGORİES,
  payload: data,
});
