import { PRODUCT_FETCH } from "../actions/productAction";

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "NOT_FETCHED",
};

export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case PRODUCT_FETCH:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
