import { SET_ROLES, SET_CATEGORİES } from "../actions/globalAction";

const globalInitial = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = globalInitial, action) => {
  switch (action.type) {
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
