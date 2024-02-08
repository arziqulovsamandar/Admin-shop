<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <h2 style="margin: 10px">Product</h2>
      <a href="/singleProduct" class="button">Home</a>
    </div>
    <div class="tables">
      <h1>{{ singleProduct.name }}</h1>
      <p>{{ singleProduct.description }}</p>
      <p>Price: {{ singleProduct.price }}</p>
      <p>Total count: {{ singleProduct.total_count }}</p>
      <p>Manufacturing date: {{ singleProduct.mfg }}</p>
      <p>Shelf life: {{ singleProduct.life }}</p>
      <p>QR code: {{ singleProduct.qr_code }}</p>
      <p>Value: {{ singleProduct.value }}</p>
      <p>Brand: {{ singleProduct.brand }}</p>
      <p>Is active: {{ singleProduct.is_active }}</p>
      <p>Unit of measure: {{ singleProduct.unit_of_measure }}</p>
      <p>Category ID: {{ singleProduct.category_id }}</p>
      <p>Created at: {{ singleProduct.createdAt }}</p>
      <p>Updated at: {{ singleProduct.updatedAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAdmin } from "@/composables/admin";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const id = router.currentRoute.value.query.id;
const { singleProduct, getSingleProduct, route } = useAdmin();
onMounted(async () => {
  await getSingleProduct(id);
});
</script>
<style scoped>
.tables h1 {
  margin: 10px;
  color: rgb(63, 63, 60);
}
.tables p {
  color: rgb(149, 43, 43);
  font-weight: 400;
  margin: 5px;
}
.button {
  width: 60px;
  height: 30px;
  background-color: rgb(76, 209, 46);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
}
</style>
