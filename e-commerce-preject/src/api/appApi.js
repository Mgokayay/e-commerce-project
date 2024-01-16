import axios from "axios";
import {
  setCategories,
  setRoles,
} from "../Reducers&Actions/actions/globalAction";
import {
  nextPage,
  productFetch,
} from "../Reducers&Actions/actions/productAction";
import { AxiosInstance } from "./api";

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
// export const fetchProducts = () => {
//   return (dispatch) => {
//     axios
//       .get("https://workintech-fe-ecommerce.onrender.com/products")
//       .then((response) => {
//         dispatch(productFetch(response.data));
//       })
//       .catch((error) => {});
//   };
// };

export const fetchProducts = (category, filter, sort) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get(
        `/products?category=${category}&filter=${filter}&sort=${sort}`
      );

      dispatch(productFetch(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
export const fetchNextPage = (data) => {
  return async (dispatch) => {
    try {
      const response = await AxiosInstance.get("/products", {
        params: data,
      });

      dispatch(nextPage(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
