import api from "@/plugins/axois";
import axiosClient from "./apiClient";
const url = import.meta.env.VITE_BASE_URL;

function apifetchProductAll() {
  return api.get("/product/all");
}

function apifetchSingleProduct(id) {
  return api.get(`/product/${id}`);
}

function apideleteProduct(id) {
  return api.delete(`/product/${id}`);
}

function apiupdateProduct(id) {
  return api.put(`/product/${id}`);
}

export {
  apideleteProduct,
  apifetchProductAll,
  apifetchSingleProduct,
  apiupdateProduct,
};
