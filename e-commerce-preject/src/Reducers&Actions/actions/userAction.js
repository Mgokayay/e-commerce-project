export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_SURNAME = "CHANGE_SURNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_ID = "CHANGE_İD";
export const CHANGE_STORE = "CHANGE_STORE";

export const changeName = (data) => ({
  type: CHANGE_NAME,
  payload: data,
});
export const changeSurname = (data) => ({
  type: CHANGE_SURNAME,
  payload: data,
});
export const changeEmail = (data) => ({
  type: CHANGE_EMAIL,
  payload: data,
});
export const changeID = (data) => ({
  type: CHANGE_ID,
  payload: data,
});
export const changeSTORE = (data) => ({
  type: CHANGE_STORE,
  payload: data,
});
