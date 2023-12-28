import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token ? { Authorization: token } : {},
  });
};

export let AxiosInstance = createAxiosInstance();

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
