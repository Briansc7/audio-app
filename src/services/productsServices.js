import { axiosProducts } from "./axiosInstance";

export const getAllProducts = async () => {
  let promise = axiosProducts.get("/");
  let res = await promise;
  return res.data;
};

export const getProductById = async (id) => {
  let promise = axiosProducts.get(`/${id}`);
  let res = await promise;
  return res.data;
};
