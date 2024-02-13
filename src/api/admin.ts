import api from "@/plugins/axois";

function apifetchProductAll() {
  return api.get("/product/all");
}

function apifetchOrderAll() {
  return api.get("/order/all");
}

function apifetchCategoriesAll() {
  return api.get("/category/all");
}

function apifetchDiscountAll() {
  return api.get("/discount/all");
}

function apifetchMediatAll() {
  return api.get("/media/all");
}

function apifetchStoretAll() {
  return api.get("/store/all");
}

function apifetchUsertAll() {
  return api.get("/user/all");
}

function apifetchCuponCodetAll() {
  return api.get("/cupon_code/all");
}

function apifetchSingleStore(id: any, token: any) {
  return api.get(`/store/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function apifetchSingleCuponCode(id: any) {
  return api.get(`/cupon_code/${id}`);
}

function apifetchSingleProduct(id: any) {
  return api.get(`/product/${id}`);
}

function apifetchSingCategory(id: any) {
  return api.get(`/category/${id}`);
}

function apifetchSingDiscount(id: any) {
  return api.get(`/discount/${id}`);
}

function apifetchSinglMedia(id: any) {
  return api.get(`/media/${id}`);
}

function apideleteStore(id: any, accessToken: any) {
  return api.delete(`/store/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
function apideleteCuponCode(id: any, accessToken: any) {
  return api.delete(`/cupon_code/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
function apideleteProduct(id: any, accessToken: any) {
  return api.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function apideleteCategory(id: any, accessToken: any) {
  return api.delete(`/category/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function apideleteDiscount(id: any, accessToken: any) {
  return api.delete(`/discount/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function apideleteMedia(id: any, accessToken: any) {
  return api.delete(`/media/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function apiupdateStore(id: any, produc: any, token: any) {
  return api.put(`/store/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
function apiupdateCuponCode(id: any, produc: any, token: any) {
  return api.put(`/cupon_code/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
function apiupdateProduct(id: any, produc: any, token: any) {
  return api.put(`/product/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function apiupdateCategory(id: any, produc: any, token: any) {
  return api.put(`/category/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function apicreateStore(produc: any) {
  return api.post(`/store/create`, produc);
}
function apicreateCuponCode(produc: any) {
  return api.post(`/cupon_code/create`, produc);
}
function apicreateProduct(produc: any) {
  return api.post(`/product/create`, produc);
}

function apicreateDiscount(produc: any) {
  return api.post(`/discount/create`, produc);
}
function apicreateMedia(produc: any) {
  return api.post(`/media/create`, produc);
}

function apicreateCategory(formData: any) {
  return api.post(`/category/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function apiupdatediscount(id: any, produc: any, token: any) {
  return api.put(`/discount/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
function apiupdateMedia(id: any, produc: any, token: any) {
  return api.put(`/media/${id}`, produc, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export {
  apideleteProduct,
  apifetchProductAll,
  apifetchSingleProduct,
  apiupdateProduct,
  apicreateProduct,
  apifetchCategoriesAll,
  apideleteCategory,
  apiupdateCategory,
  apifetchSingCategory,
  apifetchOrderAll,
  apideleteDiscount,
  apifetchDiscountAll,
  apifetchSingDiscount,
  apiupdatediscount,
  apicreateDiscount,
  apicreateMedia,
  apifetchMediatAll,
  apifetchSinglMedia,
  apiupdateMedia,
  apideleteMedia,
  apicreateStore,
  apideleteStore,
  apiupdateStore,
  apifetchSingleStore,
  apifetchStoretAll,
  apicreateCuponCode,
  apideleteCuponCode,
  apiupdateCuponCode,
  apifetchCuponCodetAll,
  apifetchSingleCuponCode,
  apifetchUsertAll,
  apicreateCategory,
};
