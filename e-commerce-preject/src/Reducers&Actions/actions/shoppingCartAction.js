export const addToCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
});

export const countDecrease = (data) => ({
  type: "DECREASE_TO_CART",
  payload: data,
});

export const removeProduct = (data) => ({
  type: "REMOVE_TO_CART",
  payload: data,
});

export const checkedProduct = (data) => ({
  type: "CHECK_TO_PRODUCT",
  payload: data,
});
