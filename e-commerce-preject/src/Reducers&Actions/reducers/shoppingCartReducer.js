const shoppincCartInitial = {
  cart: [{ count: 1, product: { id: "" } }],
  payment: {},
  adress: {},
};

export const shoppincCartReducer = (state = shoppincCartInitial, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
