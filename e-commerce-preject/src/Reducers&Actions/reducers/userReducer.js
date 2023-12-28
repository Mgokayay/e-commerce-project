import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_SURNAME,
  CHANGE_ID,
} from "../actions/userAction";

const userInitial = {
  name: "",
  surname: "",
  email: "",
  id: "",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_SURNAME:
      return { ...state, surname: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_ID:
      return { ...state, id: action.payload };

    default:
      return state;
  }
};
