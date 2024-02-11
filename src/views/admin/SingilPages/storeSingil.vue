<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <h2 style="margin: 10px">Store</h2>
      <a href="/store" class="button">Home</a>
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
          <button v-bind="props">Update store</button>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Update store</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Add count*"
                    v-model="addCount"
                  ></v-text-field>
                  <v-text-field
                    label="Product id"
                    v-model="product_id"
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
    <div class="tables">
      <h1>{{ singilStore.addCount }}</h1>
      <p>Description: {{ singilStore.product_id }}</p>
      <p>Created at: {{ singilStore.createdAt }}</p>
      <p>Updated at: {{ singilStore.updatedAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAdmin } from "@/composables/admin";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dialog = ref(false);
const id = route.query.id;
const { singilStore } = useAdmin() as { singilStore: Ref<any[]> };

const addCount = ref("");
const product_id = ref("");

import { useAdminStore } from "@/store/admin";
const { getSingleStore, updateStore } = useAdminStore();

onMounted(async () => {
  await getSingleStore(id);
});

const updateProducts = async () => {
  const produc = {
    addCount: parseInt(addCount.value),
    product_id: parseInt(product_id.value),
  };
  await updateStore(id, produc);
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
