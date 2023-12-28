import {
  LOGGED_IN,
  LOGGED_OUT,
  SET_ROLES,
  SET_CATEGORİES,
} from "../actions/globalAction";

const globalInitial = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
  loggedIn: false,
};

const globalReducer = (state = globalInitial, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGGED_OUT:
      localStorage.removeItem("token");
      const loggedOut = {
        ...state,
        loggedIn: false,
      };
      return loggedOut;
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };

    case SET_CATEGORİES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
