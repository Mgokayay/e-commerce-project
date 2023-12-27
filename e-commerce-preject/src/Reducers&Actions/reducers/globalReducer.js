import { LOGGED_IN, LOGGED_OUT } from "../actions/globalAction";

const globalİnitial = {
  roles: {},
  categories: {},
  theme: "",
  language: "",
  loggedIn: false,
};

export const globalReducer = (state = globalİnitial, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        roles: {
          ...state.roles,
          name: action.payload.name,

          role: action.payload.role,
          loggedIn: true,
        },
      };
    case LOGGED_OUT:
      localStorage.removeItem("token");
      const loggedOut = {
        ...state,
        roles: { ...state.roles, loggedIn: false },
      };
      return loggedOut;
  }
};
