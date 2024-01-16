export const PRODUCT_FETCH = "PRODUCT_FETCH";

export const productFetch = (data) => ({
  type: PRODUCT_FETCH,
  payload: data,
});

export const nextPage = (data) => ({
  type: "FETCH_MORE",
  payload: data,
});
