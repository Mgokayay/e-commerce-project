import { SET_USER, DELETE_USER, LOGIN_DATA } from "../actions/userAction";

const userInitial = {
  name: "",
  email: "",
  id: "",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };

    case DELETE_USER:
      return { ...action.payload };
    case LOGIN_DATA:
      return { ...action.payload };

    default:
      return state;
  }
};
