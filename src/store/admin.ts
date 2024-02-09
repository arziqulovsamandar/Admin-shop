import { defineStore } from "pinia";
import {
  apideleteProduct,
  apifetchProductAll,
  apifetchSingleProduct,
  apiupdateProduct,
  apicreateProduct,
} from "@/api/admin";
// import { signin } from '@/api/admin';
// import decodeJwt from '@/functions/tokenParser';
// import router from '@/router';
import { useToast } from "vue-toastification";
import { log } from "console";
const toast = useToast();

export const useAdminStore = defineStore("product", {
  state: () => ({
    products: [],
    singleProduct: {},
  }),
  actions: {
    async getProducts() {
      try {
        const res = await apifetchProductAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.products = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      }
    },

    async deleteProduct(id: number | string) {
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

    async createProduct(produc) {
      try {
        const res = await apicreateProduct(produc);
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

    async getSingleProduct(id: number | string) {
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
  },
});
