import { useAdminStore } from "@/store/admin";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { products, singleProduct } = storeToRefs(store);
  const { getProducts, getSingleProduct, deleteProduct, createProduct } =
    useAdminStore();

  onMounted(async () => {
    await getProducts();
  });

  onMounted(async () => {
    await getSingleProduct(id);
  });

  onMounted(async () => {
    await deleteProduct(id);
  });

  onMounted(async () => {
    await createProduct(produc);
  });

  return {
    singleProduct,
    products,
    route,
    router,
    getSingleProduct,
    deleteProduct,
    createProduct,
  };
};
