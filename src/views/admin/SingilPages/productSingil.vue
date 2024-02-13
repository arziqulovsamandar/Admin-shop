<template>
  <div v-if="loading"><Loading /></div>
  <div v-else>
    <div style="display: flex; justify-content: space-between">
      <h2 style="margin: 10px">Product Singil</h2>
    </div>
    <v-row
      justify="center"
      style="
        background-color: burlywood;
        color: white;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 5px;
        width: 200px;
        cursor: pointer;
      "
    >
      <v-dialog v-model="dialog" persistent width="500">
        <template v-slot:activator="{ props }">
          <button v-bind="props">Update product</button>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Update product</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Product name*"
                    v-model="name"
                  ></v-text-field>
                  <v-text-field
                    label="Description"
                    v-model="description"
                  ></v-text-field>
                  <v-text-field label="Price" v-model="price"></v-text-field>
                  <v-text-field
                    label="Total count"
                    v-model="total_count"
                  ></v-text-field>
                  <v-text-field label="mfg" v-model="mfg"></v-text-field>
                  <v-text-field label="Life" v-model="life"></v-text-field>
                  <v-text-field
                    label="qr_code"
                    v-model="qr_code"
                  ></v-text-field>
                  <v-text-field label="Value" v-model="value"></v-text-field>
                  <v-text-field label="Brand" v-model="brand"></v-text-field>
                  <v-text-field label="Rating" v-model="rating"></v-text-field>
                  <v-text-field
                    label="Unit_of_measure"
                    v-model="unit_of_measure"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="updateProducts">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div style="display: flex; padding: 10px; gap: 20px">
      <div class="tables">
        <h1>{{ singleProduct.name }}</h1>
        <p>Description: {{ singleProduct.description }}</p>
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

      <div>
        <img
          style="width: 400px; height: 400px"
          v-for="media in singleProduct.media"
          :key="media.id"
          :src="media.media_link"
          alt="Product Image"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Loading from "@/components/loading.vue";
import { ref } from "vue";
import { useAdmin } from "@/composables/admin";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dialog = ref(false);
const id = route.query.id;
const { singleProduct, loading, media } = useAdmin();

const name = ref("");
const description = ref("");
const price = ref("");
const total_count = ref("");
const mfg = ref("");
const life = ref("");
const qr_code = ref("");
const value = ref("");
const brand = ref("");
const rating = ref("");
const unit_of_measure = ref("");

import { useAdminStore } from "@/store/admin";
const { getSingleProduct, updateProduct } = useAdminStore();

onMounted(async () => {
  await getSingleProduct(id);
});

const updateProducts = async () => {
  const produc = {
    name: name.value,
    description: description.value,
    price: price.value,
    total_count: parseInt(total_count.value),
    mfg: mfg.value,
    life: life.value,
    qr_code: qr_code.value,
    value: value.value,
    brand: brand.value,
    rating: parseInt(rating.value),
    unit_of_measure: unit_of_measure.value,
  };
  await updateProduct(id, produc);
  dialog.value = false;
};
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
</style>
