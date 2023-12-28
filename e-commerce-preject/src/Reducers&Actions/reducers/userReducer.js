const userİnitial = {
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

export const userReducer = (state = userİnitial, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_SURNAME:
      return { ...state, surname: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_ID:
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
