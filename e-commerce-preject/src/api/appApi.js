import axios from "axios";
import {
  setCategories,
  setRoles,
} from "../Reducers&Actions/actions/globalAction";

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
