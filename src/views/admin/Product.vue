<template>
  <div style="overflow-x: scroll; overflow-y: hidden">
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.product") }}</h1>
      </div>
      <div>
        <productModal
          style="
            background-color: burlywood;
            color: white;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 5px;
            width: auto;
            cursor: pointer;
          "
        />
      </div>
    </div>
    <v-table class="my-2">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Total Count</th>
          <th class="text-left">Manufactured Date</th>
          <th class="text-left">Life</th>
          <th class="text-left">Value</th>
          <th class="text-left">Brand</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(products, i) in product"
          :key="i"
          @click="singil(products.id)"
        >
          <td class="text-left">{{ products.id }}</td>
          <td class="text-left">{{ products.name }}</td>
          <td class="text-left">{{ products.price }}</td>
          <td class="text-left">{{ products.total_count }}</td>
          <td class="text-left">{{ products.mfg }}</td>
          <td class="text-left">{{ products.life }}</td>
          <td class="text-left">{{ products.value }}</td>
          <td class="text-left">{{ products.brand }}</td>
          <td>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                  <v-icon class="my-2" v-bind="props" :icon="'mdi-delete'">
                  </v-icon>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    Delete Products?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="deleteProducts(product.id)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import productModal from "../admin/modals/productModal.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import router from "@/router";
import { useAdminStore } from "@/store/admin";
import { useAdmin } from "@/composables/admin";

const { t } = useI18n();
const { deleteProduct } = useAdminStore();
const { product } = useAdmin();

const dialog = ref(false);

const singil = (productId: number) => {
  router.push({
    path: "/singilproduct",
    query: { id: productId },
  });
};

const deleteProducts = (productId: number) => {
  deleteProduct(productId);
  dialog.value = false;
};
</script>
<style scoped></style>
