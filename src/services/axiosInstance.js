import axios from "axios";

//products instance

export const axiosProducts = axios.create({
  baseURL: "http://localhost:5000/products",
});
