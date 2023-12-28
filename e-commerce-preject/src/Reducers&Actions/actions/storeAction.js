export const CHANGE_NAME_STORE = "CHANGE_NAME_STORE";
export const CHANGE_SURNAME_STORE = "CHANGE_SURNAME_STORE";
export const CHANGE_EMAIL_STORE = "CHANGE_EMAIL_STORE";
export const CHANGE_ID_STORE = "CHANGE_ID_STORE";
export const CHANGE_STORE = "CHANGE_STORE";

export const changeNameStore = (data) => ({
  type: CHANGE_NAME_STORE,
  payload: data,
});
export const changeSurnameStore = (data) => ({
  type: CHANGE_SURNAME_STORE,
  payload: data,
});
export const changeEmailStore = (data) => ({
  type: CHANGE_EMAIL_STORE,
  payload: data,
});
export const changeIdStore = (data) => ({
  type: CHANGE_ID_STORE,
  payload: data,
});
export const changeStore = (data) => ({
  type: CHANGE_STORE,
  payload: data,
});
