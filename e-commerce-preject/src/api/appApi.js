import axios from "axios";
import {
  setCategories,
  setRoles,
} from "../Reducers&Actions/actions/globalAction";
import { productFetch } from "../Reducers&Actions/actions/productAction";

export const fetchRoles = () => {
  return (dispatch) => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        dispatch(setRoles(response.data));
      })
      .catch((error) => {});
  };
};
export const fetchCategories = () => {
  return (dispatch) => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/categories")
      .then((response) => {
        dispatch(setCategories(response.data));
      })
      .catch((error) => {});
  };
};
export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products")
      .then((response) => {
        dispatch(productFetch(response.data));
      })
      .catch((error) => {});
  };
};
