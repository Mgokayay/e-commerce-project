import {
  CHANGE_EMAIL_STORE,
  CHANGE_NAME_STORE,
  CHANGE_ID_STORE,
  CHANGE_SURNAME_STORE,
  CHANGE_STORE,
} from "../actions/storeAction";

const storeInitial = {
  name: "",
  surname: "",
  email: "",
  id: "",
  store: {
    name: "",
    phone: "",
    id: "",
    bank_account: "",
  },
};

export const storeReducer = (state = storeInitial, action) => {
  switch (action.type) {
    case CHANGE_NAME_STORE:
      return { ...state, name: action.payload };
    case CHANGE_SURNAME_STORE:
      return { ...state, surname: action.payload };
    case CHANGE_EMAIL_STORE:
      return { ...state, email: action.payload };
    case CHANGE_ID_STORE:
      return { ...state, id: action.payload };

    case CHANGE_STORE:
      return {
        ...state,
        store: {
          ...state.store,
          name: action.payload.name,
          phone: action.payload.phone,
          id: action.payload.id,
          bank_account: action.payload.bank_account,
        },
      };
    default:
      return state;
  }
};
