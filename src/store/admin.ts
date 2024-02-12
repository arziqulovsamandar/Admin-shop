import { defineStore } from "pinia";
import {
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
} from "@/api/admin";

import { useToast } from "vue-toastification";

const toast = useToast();

export const useAdminStore = defineStore("product", {
  state: () => ({
    product: [],
    singleProduct: {},
    category: [],
    singleCategory: {},
    order: [],
    discount: [],
    singilDiscount: {},
    media: [],
    singilMedia: {},
    users: [],

    store: [],
    singilStore: {},
    cupon_code: [],
    singilcupon_code: {},
  }),
  actions: {
    async getProducts() {
      try {
        const res = await apifetchProductAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.product = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getUsers() {
      try {
        const res = await apifetchUsertAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.users = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteProduct(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteProduct(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateProduct(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateProduct(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async createProduct(products: any) {
      try {
        const res = await apicreateProduct(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Create Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleProduct(id: any) {
      try {
        const res = await apifetchSingleProduct(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singleProduct = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getCategory() {
      try {
        const res = await apifetchCategoriesAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.category = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteCategory(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteCategory(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Category");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateCategory(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateCategory(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Category");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleCategory(id: any) {
      try {
        const res = await apifetchSingCategory(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singleCategory = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getOrder() {
      try {
        const res = await apifetchOrderAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.product = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getDiscount() {
      try {
        const res = await apifetchDiscountAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.discount = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteDiscount(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteDiscount(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateDiscount(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdatediscount(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleDiscount(id: any) {
      try {
        const res = await apifetchSingDiscount(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singilDiscount = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async createDiscount(produc: any) {
      try {
        const res = await apicreateDiscount(produc);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Create Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getMedia() {
      try {
        const res = await apifetchMediatAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.media = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteMedia(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteMedia(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateMedia(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateMedia(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async createMedia(products: any) {
      try {
        const res = await apicreateMedia(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Create Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleMedia(id: any) {
      try {
        const res = await apifetchSinglMedia(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singilMedia = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getStore() {
      try {
        const res = await apifetchStoretAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.store = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteStore(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteStore(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateStore(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateStore(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async createStore(products: any) {
      try {
        const res = await apicreateStore(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Create Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleStore(id: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apifetchSingleStore(id, token);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singilStore = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getCupon_code() {
      try {
        const res = await apifetchCuponCodetAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.cupon_code = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteCuponCode(id: any) {
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteCuponCode(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Delete Cupon code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async updateCuponCode(id: any, produc: any) {
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateCuponCode(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Update Cupon Code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async createCuponCode(products: any) {
      try {
        const res = await apicreateCuponCode(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        toast.success("Create Cupon Code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async getSingleCuponCode(id: any) {
      try {
        const res = await apifetchSingleCuponCode(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.singilcupon_code = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },
  },
});
