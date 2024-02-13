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
  apicreateCategory,
} from "@/api/admin";

import { useToast } from "vue-toastification";
import {
  MediaData,
  OrdetData,
  categoriesData,
  discountData,
  productData,
  singilproductData,
  singilstoreData,
  storeData,
  singilMediaData,
  customerData,
  cuponCodeData,
  singilcuponCodeData,
} from "@/modules/interface";
const toast = useToast();

export const useAdminStore = defineStore("product", {
  state: () => ({
    loading: false,

    product: [] as productData[],
    singleProduct: {} as singilproductData,
    category: [] as categoriesData[],
    singleCategory: {} as categoriesData,
    order: [] as OrdetData[],
    discount: [] as discountData[],
    singilDiscount: {} as discountData,
    media: [] as MediaData[],
    singilMedia: {} as singilMediaData,
    users: [] as customerData[],
    store: [] as storeData[],
    singilStore: {} as singilstoreData,
    cupon_code: [] as cuponCodeData[],
    singilcupon_code: {} as singilcuponCodeData,
  }),
  actions: {
    async getProducts() {
      this.loading = true;
      try {
        const res = await apifetchProductAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.product = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getUsers() {
      this.loading = true;
      try {
        const res = await apifetchUsertAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.users = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteProduct(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteProduct(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateProduct(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateProduct(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createProduct(products: any) {
      this.loading = true;
      try {
        const res = await apicreateProduct(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createCategory(formData: any) {
      this.loading = true;
      try {
        const res = await apicreateCategory(formData);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Product");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleProduct(id: any) {
      this.loading = true;
      try {
        const res = await apifetchSingleProduct(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleProduct = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getCategory() {
      this.loading = true;
      try {
        const res = await apifetchCategoriesAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.category = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteCategory(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteCategory(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Category");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateCategory(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateCategory(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Category");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleCategory(id: any) {
      this.loading = true;
      try {
        const res = await apifetchSingCategory(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleCategory = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getOrder() {
      this.loading = true;
      try {
        const res = await apifetchOrderAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.product = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getDiscount() {
      this.loading = true;
      try {
        const res = await apifetchDiscountAll();
        if (!res.data?.discount && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.discount = res.data?.discount;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteDiscount(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteDiscount(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateDiscount(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdatediscount(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleDiscount(id: any) {
      this.loading = true;
      try {
        const res = await apifetchSingDiscount(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singilDiscount = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createDiscount(produc: any) {
      this.loading = true;
      try {
        const res = await apicreateDiscount(produc);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Discount");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getMedia() {
      this.loading = true;
      try {
        const res = await apifetchMediatAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.media = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteMedia(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteMedia(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateMedia(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateMedia(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createMedia(products: any) {
      this.loading = true;
      try {
        const res = await apicreateMedia(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Media");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleMedia(id: any) {
      this.loading = true;
      try {
        const res = await apifetchSinglMedia(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singilMedia = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getStore() {
      this.loading = true;
      try {
        const res = await apifetchStoretAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.store = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteStore(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteStore(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateStore(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateStore(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createStore(products: any) {
      this.loading = true;
      try {
        const res = await apicreateStore(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Store");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleStore(id: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apifetchSingleStore(id, token);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singilStore = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getCupon_code() {
      this.loading = true;
      try {
        const res = await apifetchCuponCodetAll();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.cupon_code = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteCuponCode(id: any) {
      this.loading = true;
      try {
        const accessToken = localStorage.getItem("token");
        const res = await apideleteCuponCode(id, accessToken);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Delete Cupon code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async updateCuponCode(id: any, produc: any) {
      this.loading = true;
      try {
        const token = localStorage.getItem("token");
        const res = await apiupdateCuponCode(id, produc, token);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Update Cupon Code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async createCuponCode(products: any) {
      this.loading = true;
      try {
        const res = await apicreateCuponCode(products);
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        toast.success("Create Cupon Code");
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleCuponCode(id: any) {
      this.loading = true;
      try {
        const res = await apifetchSingleCuponCode(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singilcupon_code = res.data;
      } catch (error) {
        if (error instanceof Error) {
          toast.warning(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
