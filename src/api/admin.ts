import api from "@/plugins/axois";
const url = import.meta.env.VITE_BASE_URL;

function apifetchProductAll() {
  return api.get("/product/all");
}

function apifetchSingleProduct(id) {
  return api.get(`/product/${id}`);
}

function apideleteProduct(id, accessToken) {
  return api.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
function apiupdateProduct(id) {
  return api.put(`/product/${id}`);
}

function apicreateProduct(produc) {
  return api.post(`/product/create`, produc);
}

export {
  apideleteProduct,
  apifetchProductAll,
  apifetchSingleProduct,
  apiupdateProduct,
  apicreateProduct,
};
