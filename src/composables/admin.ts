import { useAdminStore } from "@/store/admin";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useAdmin = () => {
  const storee = useAdminStore();
  const router = useRouter();
  const route = useRoute();
  const {
    product,
    singleProduct,
    category,
    singleCategory,
    order,
    discount,
    singilDiscount,
    media,
    singilMedia,
    store,
    singilStore,
    cupon_code,
    singilcupon_code,
  } = storeToRefs(storee);
  const {
    getProducts,
    getCategory,
    getOrder,
    getDiscount,
    getMedia,
    getCupon_code,
    getStore,
  } = useAdminStore();

  onMounted(async () => {
    await getProducts();

    await getCategory();

    // await getOrder();

    await getDiscount();

    await getMedia();

    await getCupon_code();

    await getStore();
  });

  return {
    singleProduct,
    product,
    route,
    router,
    category,
    singleCategory,
    order,
    discount,
    singilDiscount,
    media,
    singilMedia,
    store,
    singilStore,
    cupon_code,
    singilcupon_code,
  };
};
