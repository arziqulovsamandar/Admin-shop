<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.product") }}</h1>
      </div>
      <!-- <div>
        <productModal
          :dialog="dialog"
          :productId="productId"
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
      </div> -->
    </div>
    <v-table class="my-2" style="overflow-x: auto">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Add Count</th>
          <th class="text-left">Product id</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Updated At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in store" :key="i">
          <td class="text-left">{{ product.addCount }}</td>
          <td class="text-left">{{ product.product_id }}</td>
          <td class="text-left">{{ product.createdAt }}</td>
          <td class="text-left">{{ product.updatedAt }}</td>
          <td class="flex">
            <v-icon
              @click="openProductModal(product.id)"
              class="my-2 mx-4"
              :icon="'mdi-pencil'"
            >
            </v-icon>
            <v-icon @click="deleteProduct(product.id)" :icon="'mdi-delete'">
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
// import productModal from "../admin/modals/productModal.vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, onMounted } from "vue";
import axios from "axios";

const store = ref([]);

// const dialog = ref(false);
// const productId = ref<number | null>(null);

// const openProductModal = (id: number) => {
//   productId.value = id;
//   dialog.value = true;
// };

const deleteProduct = async (productId: number) => {
  try {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }
    const response = await axios.delete(
      `http://localhost:4000/api/store/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    toast.success("Delete Product");
  } catch (error) {
    toast.warning("Error");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/store/all");
    store.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
